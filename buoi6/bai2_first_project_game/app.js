function getRandomValue(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHeal: 100,
            monsterHeal: 100,
            heal: 15,
            indexHeal: 0
        };
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(12, 5);
            if (this.monsterHeal < attackValue) {
                this.monsterHeal = 0;
            } else {
                this.monsterHeal -= attackValue;
            }
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(15, 8);
            if (this.playerHeal < attackValue) {
                this.playerHeal = 0;
            } else {
                this.playerHeal -= attackValue;
                this.indexHeal++;
            }
        },
        healPlayer() {
            if (this.indexHeal >= 3) {
                if (this.playerHeal < 100) {
                    this.playerHeal += this.heal;
                    this.indexHeal = 0;
                    if (this.playerHeal >= 100) {
                        this.playerHeal = 100;
                    }
                }
            }
        },
        playAgain() {
            this.playerHeal = this.monsterHeal = 100;
        }
    }
});

app.mount('#game');
function getRandomValue(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHeal: 100,
            monsterHeal: 100,
            currentRound: 3,
            winner: null,
            LogMessage: []
        };
    },
    watch: {
        playerHeal(value) {
            if (value <= 0 && this.monsterHeal <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHeal(value) {
            if (value <= 0 && this.playerHeal <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    },
    computed: {
        mosterBarStyle() {
            if (this.monsterHeal < 0) {
                return { width: 0 + '%'};
            }

            return {width: this.monsterHeal + '%'};
        },
        playerBarStyle() {
            if (this.playerHeal < 0) {
                return { width: 0 + '%'};
            }

            return {width: this.playerHeal + '%'};
        },
        mayUseSpecialAttack() {
            return this.currentRound !== 3;
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(12, 5);
            if (this.monsterHeal < attackValue) {
                this.monsterHeal = 0;
            } else {
                this.monsterHeal -= attackValue;
            }
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(15, 8);
            if (this.playerHeal < attackValue) {
                this.playerHeal = 0;
            } else {
                this.playerHeal -= attackValue;
            }
            this.addLogMessage('moster', 'attack', attackValue);
            
            if (this.currentRound < 3) {
                this.currentRound++;
            }
        },
        specialAttackMonster() {
            const attackValue = getRandomValue(10, 25);
            this.attackPlayer();
            this.monsterHeal -= attackValue;
            this.addLogMessage('moster', 'attack special', attackValue);
            this.currentRound = 0;
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20);
            if (this.playerHeal + healValue > 100) {
                this.playerHeal = 100;
            } else {
                this.playerHeal += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        playAgain() {
            this.playerHeal = this.monsterHeal = 100;
            this.currentRound = 3;
            this.winner = null;
            this.LogMessage = [];
        },
        addLogMessage(who, what, value) {
            this.LogMessage.unshift({
                actionBy: who,
                acctionType: what,
                acctionValue: value
            });
        }
    }
});

app.mount('#game');
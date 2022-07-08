const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    computed: {
        boxAClasses() {
            return {active: this.boxASelected}
        }
    },
    methods: {
        boxSelectred(box) {
            switch (box) {
                case 'A':
                    if (this.boxASelected) {
                        this.boxASelected = false;
                    } else {
                        this.boxASelected = true;
                    }
                    break;
                case 'B':
                    if (this.boxBSelected) {
                        this.boxBSelected = false;
                    } else {
                        this.boxBSelected = true;
                    }
                    break;
                case 'C':
                    if (this.boxCSelected) {
                        this.boxCSelected = false;
                    } else {
                        this.boxCSelected = true;
                    }
                    break;
            }
        }
    }
});

app.mount('#styling');
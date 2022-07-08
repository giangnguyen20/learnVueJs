const app = Vue.createApp({
    data() {
        return {
            name: '',
            counter: 10,
            comfirmedName: ''
        };
    },
    methods: {
        confirmInput() {
            this.comfirmedName = this.name;
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        add(num) {
            return this.counter += num;
        },
        reduce(num) {
            return this.counter -= num;
        },
        submitForm() {
            alert('Bạn vừa submit');
        }
    }
});

app.mount('#events');

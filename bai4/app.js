const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            watch_name: '',
            watch_lastName: '',
            watch_fullname: '',
            computed_name: '',
            computed_lastName: ''
        };
    },
    watch: {
        watch_name(value) {
            if (value === '' || this.watch_lastName === '') {
                this.watch_fullname = '';
            } else {
                this.watch_fullname = value + ' ' + this.watch_lastName;
            }
        },
        watch_lastName(value) {
            if (value === '' || this.watch_name === '') {
                this.watch_fullname = '';
            } else {
                this.watch_fullname = this.watch_name + ' ' + value;
            }
        },
        counter(value) {
            const that = this;
            if (value > 50) {
                setTimeout(function() {
                    that.counter = 0;
                }, 2000);
            }
        }
    },
    computed: {
        fullname() {
            if (this.computed_name === '' || this.computed_lastName === '') {
                return '';
            } else {
                return this.computed_name + ' ' + this.computed_lastName;
            }
        }
    },
    methods: {
        // outputFullname() {
        //     console.log('Running again...');
        //     if (this.name === '') {
        //         return '';
        //     } 
        //     return this.name + ' ' + 'Nguyen';
        // },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetWatchInput() {
            this.watch_name = this.watch_lastName = '';
        },
        resetComputedInput() {
            this.computed_name = this.computed_lastName = '';
        }
    }
});

app.mount('#events');

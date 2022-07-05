const app = Vue.createApp({
    data() {
        return {
            step: 0,
            counter: 0,
        };
    },
    methods: {
        addStep() {
            return this.counter += this.step;
        },
        removeStep() {
            return this.counter -= this.step;
        }
    }
});

app.mount('#events');

import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 2;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizedCounter(_, getters) {
            const myCounter = getters.finalCounter;
            if (myCounter < 0) {
                return 0
            }
            if (myCounter > 100) {
                return 100
            }
            return myCounter;
        },
    },
});

const app = createApp(App);

app.use(store);

app.mount('#app');

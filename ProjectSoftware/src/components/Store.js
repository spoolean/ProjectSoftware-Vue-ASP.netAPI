import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activePage: 1,
        model1: "",
        model2: "",
    },
    mutations: {
        setActivePage(state, page) {
            state.activePage = page;
        },
        incrementPage(state) {
            if (state.activePage != 4) {
                state.activePage += 1;
            }
        },
        decrementPage(state) {
            if (state.activePage != 1) {
                state.activePage -= 1;
            }
        },
        setModel1(state, text) {
            state.model1 = text;
        },
    },
    actions: {
        changePage({ commit }, page) {
            commit("setActivePage", page);
        },
        forward({ commit }) {
            commit("incrementPage");
        },
        backward({ commit }) {
            commit("decrementPage");
        },
        sendPrompt({ commit}) {
            fetch(`${window.location.origin}/languagemodel`, {
                //method: 'POST',
                //body: JSON.stringify({ text: this.state.model1 }),
                //headers: { 'Content-Type': 'application/json' }
            }).then(response => response.text())
              .then(data => {
                  console.log(data);
            }).catch(error => { console.log(error); });
        },
    },
});

import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activePage: 1,
        model1: "",
        model2: "",
        survey: {
            rating: null,
            checkBox: false,
            reviewText: "",
        }
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
        setModel2(state, text) {
            state.model2 = text;
        }
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
        sendPrompt({ commit }, modelNumber) {
            let model = (modelNumber === 1) ? this.state.model1 : this.state.model2;
            let setModel = (modelNumber === 1) ? "setModel1" : "setModel2";
            let type = (modelNumber === 1) ? 'completion' : 'chat';
            fetch(`${window.location.origin}/languagemodel`, {
                method: 'POST',
                body: JSON.stringify({ text: model, type: type }),
                headers: { 'Content-Type': 'application/json' }
            }).then(response => response.text())
                .then(data => {
                    console.log(data);
                    commit(setModel, data);
                }).catch(error => { console.log(error); });
        },
        sendTTS(modelNumber) {
            let modelText = (modelNumber === 1) ? this.state.model1 : this.state.model2;

            let audio = new Audio(`${window.location.origin}/tts/getazure/${modelText}`)
            audio.play();
        },
        submitResponse() {
            console.log(JSON.stringify(this.state.survey));
            fetch(`${window.location.origin}/submit`, {
                method: 'POST',
                body: JSON.stringify(this.state.survey),
                headers: { 'Content-Type': 'application/json' }
            }).then(response => response.text()).then(data => {
                console.log(data);
            }).catch(error => { console.log(error); });
        },
    },
});
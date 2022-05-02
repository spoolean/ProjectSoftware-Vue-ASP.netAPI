import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false,
        submitted: false,
        audio: new Audio(),
        activePage: 1,
        model1: "",
        model2: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: ",
        prompt1: "There were once three brothers who were travelling along a lonely, winding road at twilight. In time, the brothers reached a river, too deep to wade through, and too dangerous to swim across.",
        prompt2: "It began with the forging of the Great Rings. Three were given to the Elves, immortal, wisest and fairest of all beings. Seven to the Dwarf-Lords, great miners and craftsmen of the mountain halls. And nine, nine rings were gifted to the race of Men, who above all else desire power.",
        prompt3: "Penelope was a clever, clear-minded girl eager to start her new life in a different state, in a different school, with different parents. No one could ever know who she once was.",
        survey: {
            story: {
                trailOff: "",
                trailOffReason: "",
                errors: "",
                knowledgable: "",
                engagingStorys: "",
                prompt1: "",
                prompt2: "",
                prompt3: "",
            },
            chat: {
                realisticAnswers: "",
                couldConverse: "",
                canLie: ""
            },
            voice1: {
                overallRating: 0,
                listeningEffort: "",
                hardToUnderstand: "",
                whichWords: "",
                voicePace: "",
                voice3Comparison: ""
            },
            voice2: {
                overallRating: 0,
                listeningEffort: "",
                hardToUnderstand: "",
                whichWords: "",
                voicePace: "",
                voice3Comparison: ""
            },
            voices: {
                preferredVoice: "",
                preferredVoiceReason: "",
                clearestVoice: ""
            },
        },
    },
    mutations: {
        setActivePage(state, page) {
            state.activePage = page;
        },
        incrementPage(state) {
            if (state.activePage != 5) {
                state.activePage += 1;
            }
        },
        decrementPage(state) {
            if (state.activePage != 1) {
                state.activePage -= 1;
            }
        },
        setModel1(state, text) {
            state.model1 += text;
        },
        setModel2(state, text) {
            state.model2 += text;
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
            this.state.loading = true;
            
            let model = (modelNumber === 1) ? this.state.model1 : this.state.model2;
            let setModel = (modelNumber === 1) ? "setModel1" : "setModel2";
            let type = (modelNumber === 1) ? 'completion' : 'chat';

            fetch(`${window.location.origin}/languagemodel`, {
                method: 'POST',
                body: JSON.stringify({ text: model, type: type }),
                headers: { 'Content-Type': 'application/json' }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.text();
            }).then(data => {
                console.log(data);
                commit(setModel, data);
                this.state.loading = false;
            }).catch(error => { console.log(error); });
        },
        sendTTS({ commit }, { model, tts , engine}) {
            let modelText = (model === 1) ? this.state.model1 : this.state.model2;
            let ttsChoice = ['getazure', 'getgoogle'];
            let engineChoice = ['standard', 'neural'];
            let ttsModel = ttsChoice[tts];
            let engineModel = engineChoice[engine];

            this.state.audio.pause();
            this.state.audio.src = `${window.location.origin}/tts/${ttsModel}/?answer=${modelText}&engine=${engineModel}`;
            this.state.audio.play();
        },
        submitResponse({ commit }) {
            this.state.loading = true;
            console.log(JSON.stringify(this.state.survey));
            fetch(`${window.location.origin}/submit`, {
                method: 'POST',
                body: JSON.stringify(this.state.survey),
                headers: { 'Content-Type': 'application/json' }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.text();
            }).then(data => {
                this.state.loading = false;
                console.log(data);
            }).catch(error => { console.log(error); });
        },
    },
});
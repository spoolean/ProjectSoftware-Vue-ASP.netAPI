import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    consent: false,
    activePane: "consent",
  },
  mutations: {
    setConsent(state, consent) {
      state.consent = consent;
    },
    setActivePane(state, pane) {
      state.activePane = pane;
    },
  },
  actions: {
    consentToLanguage({ commit, state }, consent) {
      commit("setConsent", consent);
      if (consent) {
        commit("setActivePane", "languageModel");
      }
    },
  },
});

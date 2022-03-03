/*Import Vue and associated Vue dependencies*/
import Vue from "vue";
import Vuex from "vuex";
/*Import bootstrap and nessecary files*/
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.js";
import Store from "./components/Store.js";

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  store: Store,
  render: (h) => h(App),
}).$mount("#app");

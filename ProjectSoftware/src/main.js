import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Store from './components/Store.vue'

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
    store: Store,
    data: {

    },
    render: h => h(App),
}).$mount('#app')

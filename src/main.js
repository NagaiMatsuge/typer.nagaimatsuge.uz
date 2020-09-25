import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

import Vuex from "vuex";
import storeData from "./store";
Vue.use(Vuex);
const store = new Vuex.Store(storeData);

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");

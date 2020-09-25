import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
Vue.config.productionTip = false;
Vue.use(VueRouter);

import routes from "./routes";

const router = new VueRouter({
  mode: "history",
  routes,
});

import Vuex from "vuex";
import storeData from "./store";
Vue.use(Vuex);
const store = new Vuex.Store(storeData);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

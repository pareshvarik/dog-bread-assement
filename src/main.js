import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import store1 from "./store/index";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuex from "vuex";

Vue.use(Vuex);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

export const store = new Vuex.Store(
  store1
);
Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

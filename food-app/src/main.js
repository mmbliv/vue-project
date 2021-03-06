import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./router";
Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({ routes: Routes });

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});

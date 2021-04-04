/* eslint-disable */
import Home from "./views/home.vue";

export default new VueRouter({
  mode: "history",
  base: "/vue-quick-start/",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});

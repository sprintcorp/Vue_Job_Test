import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },

  /*list of all routes */
  routes: [
    {
      path: "/",
      component: () => import("../pages/login/login.vue"),
    },
    {
      path: "/about",
      component: () => import("../pages/about/about.vue"),
    },
  ],
});

export default router;

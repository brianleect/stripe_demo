import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Purchased from "../views/Purchased.vue";
import Cancelled from "../views/Cancelled.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/purchased",
    name: "Purchased",
    component: Purchased
  },
  {
    path: "/cancelled",
    name: "Cancelled",
    component: Cancelled
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

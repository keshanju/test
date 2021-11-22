import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const constantRouterMap = [
  {
    name: "Index",
    path: "/index",
    component: () => import("./views/index/list.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

let routes: any = constantRouterMap;

let rr = new Router({
  routes,
});

export default rr;

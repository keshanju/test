import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const constantRouterMap = [
  {
    path: "/login",
    component: () => import("./views/login/list.vue")
  },
  {
    path: "/test",
    component: () => import("./views/test/index.vue")
  },
  {
    path: "/",
    component: () => import("./views/index/layout.vue"),
    // redirect: "/login",
    children:
      [
        {
          path: "/",
          component: () => import("./views/index/list.vue")
        },
        {
          path: "/ad/list",
          component: () => import("./views/ad/list.vue")
        },
      ]
  }
];

let routes: any = constantRouterMap;
let rr = new Router({
  routes
});

export default rr;

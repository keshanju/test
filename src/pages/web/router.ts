import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const constantRouterMap = [
  {
    path: "/web/login",
    component: () => import("./views/login/list.vue")
  },
  {
    path: "/",
    component: () => import("./views/index/layout.vue"),
    redirect: "/web/login",
    children:
      [
        {
          path: "/web/ad/list",
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

import LocalStorageUtil from "@/utils/LocalStorageUtil";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const constantRouterMap = [
  {
    name: 'Index',
    path: "/",
    component: () => import("./views/index/list.vue")
  },
  {
    name: 'Login',
    path: "/login",
    component: () => import("./views/login/list.vue")
  },
  {
    name: 'Register',
    path: "/register",
    component: () => import("./views/register/list.vue")
  },
  {
    name: 'Forgetpwd',
    path: "/forgetpwd",
    component: () => import("./views/forgetpwd/list.vue")
  },
  {
    name: 'Test',
    path: "/test",
    component: () => import("./views/test/index.vue")
  },
  {
    name: 'Exchange',
    path: "/exchange",
    component: () => import("./views/exchange/list.vue")
  },
  {
    name: 'Markets',
    path: "/markets",
    component: () => import("./views/markets/list.vue")
  },
  {
    name: 'Suanli',
    path: "/suanli",
    component: () => import("./views/suanli/list.vue")
  },
  {
    name: 'Quantization',
    path: "/quantization",
    component: () => import("./views/quantization/list.vue")
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: "",
    redirect: '/user_center/security',
    component: () => import("./views/index/layout.vue"),
    children:
      [
        {
          name: 'UserCenter',
          path: "/user_center/security",
          component: () => import("./views/user_center/list.vue")
        },
        {
          name: 'UCAUTH',
          path: "/user_center/uc_auth",
          component: () => import("./views/user_center/uc_auth/list.vue")
        },
      ]
  }
];

let routes: any = constantRouterMap;

let rr = new Router({
  routes
});

const noNeedLogin = ['Login', 'Register', 'Forgetpwd', 'Test', 'Exchange', 'Suanli', 'Quantization', 'Markets', 'Index']

rr.beforeEach((to, from, next) => {
  const checkLogin = LocalStorageUtil.getLoginInfo();
  if(!noNeedLogin.includes(to.name)) {
    if (checkLogin.token) next() 
    else next({name: 'Login'})
    next()
  } else {
    if (checkLogin.token) next()
    else next()
    next()
  }
})

export default rr;

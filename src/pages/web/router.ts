import LocalStorageUtil from "@/utils/LocalStorageUtil";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const constantRouterMap = [
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
    path: '*',
    redirect: '/'
  },
  {
    name: 'Index',
    path: "/",
    component: () => import("./views/index/layout.vue"),
    children:
      [
        {
          name: 'Index',
          path: "/",
          component: () => import("./views/index/list.vue")
        },
        {
          name: 'UserCenter',
          path: "/user_center",
          component: () => import("./views/user_center/list.vue")
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

const noNeedLogin = ['Login', 'Register', 'Forgetpwd']

rr.beforeEach((to, from, next) => {
  const checkLogin = LocalStorageUtil.getLoginInfo();
  if(!noNeedLogin.includes(to.name)) {
    if (checkLogin.token) {
      next()
    } else {
      next('/')
    }
  } else {
    if (checkLogin.token) {
      next('/user_center')
    }
  }
})

export default rr;

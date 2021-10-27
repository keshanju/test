/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 08:51:35
 * @LastEditTime: 2019-09-20 09:26:47
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
//
// 动态模块加载
//let resolved = id => () => require(id);
// if (process.env == 'production') {
//   resolved= id => () => import('@/' + id + '.vue')
// } else {
//   resolved= id => require('@/' + id + '.vue')
// }

// let router = [];
// for (const item of MenuUtil.getAllMenuList()) {
//   if (item.items && item.items.length > 0) {
//     for (const item2 of item.items) {
//       //let aa = import(item2.component);
//       // console.log(item2.component);
//       router.push({
//         path: item2.href, component:resolved(item2.component)
//       });
//     }
//   }
// }

// router.push(
//   { path: '/admin/index', component: () => import('./views/index/list.vue') },
// );
// let bb = MenuUtil.getAllMenuList()[0];

// //let xx = () => import(bb.items[0].component);
// let xx = () => import(bb.items[0].component) => /^\.\/app.*\/util$/;
const constantRouterMap = [
  {
    path: "/admin/login",
    component: () => import("./views/login/list.vue")
  },
  {
    path: "/",
    component: () => import("./views/index/layout.vue"),
    redirect: "/admin/login",
    children:
      //router
      [
        {
          path: "/admin/ad/list",
          component: () => import("./views/ad/list.vue")
        },
        {
          path: "/admin/ad/classlist",
          component: () => import("./views/ad/classlist.vue")
        },
        {
          path: "/admin/admin/pwd",
          component: () => import("./views/admin/pwd.vue")
        },
        {
          path: "/admin/admin/list",
          component: () => import("./views/admin/list.vue")
        },
        {
          path: "/admin/admin/rolelist",
          component: () => import("./views/admin/rolelist.vue")
        },
        {
          path: "/admin/article/list",
          component: () => import("./views/article/list.vue")
        },
        {
          path: "/admin/article/edit/:id?",
          component: () => import("./views/article/article/edit.vue")
        },
        {
          path: "/admin/article/commentlist",
          component: () => import("./views/article/commentlist.vue")
        },
        {
          path: "/admin/article/classlist",
          component: () => import("./views/article/classlist.vue")
        },
        {
          path: "/admin/article/topicclasslist",
          component: () => import("./views/article/topicclasslist.vue")
        },
        {
          path: "/admin/article/collectionlist",
          component: () => import("./views/article/collectionlist.vue")
        },
        {
          path: "/admin/blocker/list",
          component: () => import("./views/blocker/list.vue")
        },
        {
          path: "/admin/cache/list",
          component: () => import("./views/cache/list.vue")
        },
        {
          path: "/admin/config/edit",
          component: () => import("./views/config/edit.vue")
        },
        {
          path: "/admin/diy/list",
          component: () => import("./views/diy/list.vue")
        },
        {
          path: "/admin/diy/edit/:id?",
          component: () => import("./views/diy/diy/edit.vue")
        },
        {
          path: "/admin/diy/classlist",
          component: () => import("./views/diy/classlist.vue")
        },
        {
          path: "/admin/ext/list",
          component: () => import("./views/ext/list.vue")
        },
        {
          path: "/admin/file/list",
          component: () => import("./views/file/list.vue")
        },
        {
          path: "/admin/friend/list",
          component: () => import("./views/friend/list.vue")
        },
        {
          path: "/admin/friend/classlist",
          component: () => import("./views/friend/classlist.vue")
        },
        {
          path: "/admin/guest/list",
          component: () => import("./views/guest/list.vue")
        },
        {
          path: "/admin/index",
          component: () => import("./views/index/list.vue")
        },
        {
          path: "/admin/keywords/list",
          component: () => import("./views/keywords/list.vue")
        },
        {
          path: "/admin/menu/list",
          component: () => import("./views/menu/list.vue")
        },
        {
          path: "/admin/plugin/list",
          component: () => import("./views/plugin/list.vue")
        },
        {
          path: "/admin/template/list",
          component: () => import("./views/template/list.vue")
        },
        {
          path: "/admin/user/list",
          component: () => import("./views/user/list.vue")
        },
        {
          path: "/admin/user/rolelist",
          component: () => import("./views/user/rolelist.vue")
        },
        {
          path: "/admin/wx/list",
          component: () => import("./views/wx/list.vue")
        },
        {
          path: "/admin/logs/list",
          component: () => import("./views/logs/list.vue")
        },
        {
          path: "/admin/module/list",
          component: () => import("./views/module/list.vue")
        },
        {
          path: "/admin/widget/list",
          component: () => import("./views/widget/list.vue")
        },
        //产品管理
        {
          path: "/admin/product/config",
          component: () => import("./views/product/config.vue"),
          meta: { bread:[{path:'/admin/product/config',title:'产品配置'}] }
        },
        {
          path: "/admin/product/shoplist",
          component: () => import("./views/product/shoplist.vue")
        },
        {
          path: "/admin/product/list",
          component: () => import("./views/product/list.vue"),
          meta: { bread:[{path:'/admin/product/shoplist',title:'产品管理'}] }
        },
        {
          path: "/admin/product/edit/:id?",
          component: () => import("./views/product/product/edit.vue"),
          meta: { bread:[{path:'/admin/product/list',title:'产品管理'},{path:'/admin/product/edit',title:'产品编辑'}] }
        },
        {
          path: "/admin/product/classlist",
          component: () => import("./views/product/classlist.vue")
        },
        {
          path: "/admin/product/commentlist",
          component: () => import("./views/product/commentlist.vue")
        },
        {
          path: "/admin/product/topicclasslist",
          component: () => import("./views/product/topicclasslist.vue")
        },
        {
          path: "/admin/product/brandlist",
          component: () => import("./views/product/brandlist.vue")
        },
        {
          path: "/admin/product/addresslist",
          component: () => import("./views/product/addresslist.vue")
        },
        {
          path: "/admin/product/orderlist",
          component: () => import("./views/product/orderlist.vue")
        },
        {
          path: "/admin/product/paymentlist",
          component: () => import("./views/product/paymentlist.vue")
        },
        {
          path: "/admin/product/shipmentlist",
          component: () => import("./views/product/shipmentlist.vue")
        },
        {
          path: "/admin/product/reportlist",
          component: () => import("./views/product/reportlist.vue")
        },
        {
          path: "/admin/product/freight_template",
          component: () => import("./views/product/freight_template/list.vue")
        },
        {
          path: "/admin/product/ext/list",
          component: () => import("./views/product/ext/list.vue")
        },
        {
          path: "/admin/product/orderdetail/:id",
          component: () => import("./views/product/orderdetail.vue"),
          meta: { bread:[{path:'/admin/product/orderlist',title:'订单管理'},{path:'',title:'订单详情'}] }          
        }
      ]
  }
];

let routes: any = constantRouterMap;

let rr = new Router({
  routes
});

export default rr;

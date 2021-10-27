/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 08:51:35
 * @LastEditTime: 2019-09-20 17:36:00
 * @LastEditors: Please set LastEditors
 */
//import '@/assets/layui/css/layui.css';
//import '@/assets/layui/layui.all.js';

import Vue from 'vue';
import App from './app.vue';
import router from './router';
import vuex from 'vuex';
import store from './store';

Vue.config.productionTip = false;

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//Vue.use(Element);
Vue.use(Element, { size: 'mini' });
Vue.use(vuex);

import './assets/less/admin.less';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


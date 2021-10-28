import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuex from 'vuex';
import store from './store';
import * as socketApi from './socket'
Vue.prototype.$socketApi = socketApi

Vue.config.productionTip = false;

// import Element from 'element-ui';
import Element from './components/element-ui/index'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, { size: 'mini' });
Vue.use(vuex);

// 项目样式文件
import './assets/less/web.less';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


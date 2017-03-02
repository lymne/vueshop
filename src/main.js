// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import Home from 'components/Home';
import { AjaxPlugin } from 'vux';

Vue.use(AjaxPlugin);

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/demo',
    component: function (resolve) {
      require(['components/demo/demo.vue'], resolve);
    }
  },
  {
    path: '/category',
    component: function (resolve) {
      require(['components/category/category.vue'], resolve);// 异步加载组件
    }
  }
];

const router = new VueRouter({
  routes
});
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box');


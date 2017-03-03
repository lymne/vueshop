// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import Home from 'components/Home';
import { AjaxPlugin } from 'vux';

Vue.use(AjaxPlugin);

Vue.use(VueRouter);

Vue.use(Vuex);

const store = new Vuex.Store({}); // 这里你可能已经有其他 module

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading;
    }
  }
});

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
    path: '/category/',
    component: function (resolve) {
      require(['components/category/category.vue'], resolve);// 异步加载组件
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true});
  next();
});

router.afterEach(function (to) {
  setTimeout(function () {
    store.commit('updateLoadingStatus', {isLoading: false});
  }, 500);
});

FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box');


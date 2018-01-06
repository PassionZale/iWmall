import Vue from 'vue';

import VueRouter from 'vue-router';
import axios from 'axios';

import Mint, { InfiniteScroll, Indicator } from 'mint-ui';

import App from './App.vue'
import { AppRouter } from './router'

Vue.use(Mint);
Vue.use(InfiniteScroll);
Vue.use(VueRouter);

/**
 * 价格转换为0.00的浮点数
 */
Vue.filter('transformPrice', function (value) {
    if (value >= 0) {
        return parseFloat(value).toFixed(2);
    }
});

/**
 * 商品详情换行
 */
Vue.filter('rnTransform', function (value) {
    if (value) {
        return value.replace(/\r\n/g, "<br/>");
    }
});

/**
 * 数据列表无限滚动监听
 */
Vue.directive('data-scroll', function (value) {
    window.addEventListener('scroll', () => {
        let fnc = value;
        fnc();
    });
});

/**
 * 手机号隐私处理
 */
Vue.filter('transformPhone', function (value) {
    if (value) {
        let phone = value;
        let phone_head = phone.substring(0, 3);
        let phone_foot = phone.substr(7, 4);
        return phone_head + '****' + phone_foot;
    }
});

Vue.prototype.$http = axios;

axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('#csrf-token').getAttribute('content');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

App.router = AppRouter

new Vue(App);


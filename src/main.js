import Vue from 'vue';
import 'babel-polyfill';
import fastclick from 'fastclick';
import App from './App';
import router from './router';
import 'swiper/dist/css/swiper.css';
import 'assets/scss/index.scss';
import vueLazyload from 'vue-lazyload';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import checkFormPlugin from './api/vue_checkform_plugin.js';

Vue.use(ElementUI);
Vue.use(checkFormPlugin);


Vue.use(vueLazyload, {
  preLoad: 1,
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 1
}

)

Vue.config.productionTip = false;
fastclick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

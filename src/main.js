import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vant from 'vant'
import 'vant/lib/index.css';
import 'u-reset.css'



Vue.config.productionTip = false;


Vue.use(vant);
Vue.use(ElementUI);

new Vue({
  router,

  render: h => h(App)
}).$mount('#app');

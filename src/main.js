import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
];

new Vue({
  routes,
  render: h => h(App),
}).$mount('#app')

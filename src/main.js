import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faTwitter,
    faGithub,
    faZhihu,
    faWeibo
  } from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';

library.add(faTwitter, faWeibo, faZhihu, faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

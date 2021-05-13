import Vue from 'vue'
import VueRouter from 'vue-router'
import coverBriefAll from '../components/coverBriefAll'
import articles from '../components/articles'
import about from '../components/about'
import contact from '../components/contact'

Vue.use(VueRouter);

export default new VueRouter( {
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: coverBriefAll },
        { path: '/articles', component: articles },
        { path: '/about', component: about },
        { path: '/contact', component: contact },
    ]
});
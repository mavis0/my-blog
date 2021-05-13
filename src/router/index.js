import Vue from 'vue'
import VueRouter from 'vue-router'
import coverBriefAll from '../components/coverBriefAll'
import articles from '../components/articles'

Vue.use(VueRouter);

export default new VueRouter( {
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: coverBriefAll },
        { path: '/articles', component: articles },
    ]
});
import Vue from 'vue';
import VueRouter from 'vue-router';
import coverBriefAll from '../components/coverBriefAll';
import posts from '../components/posts';
import about from '../components/about';
import contact from '../components/contact';
import post from  '../components/post';
import notFind from  '../components/404';
import axios from 'axios';

Vue.use(VueRouter);

const router = new VueRouter( {
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: coverBriefAll },
        { path: '/post/:id', component: post },
        { path: '/posts', component: posts },
        { path: '/about', component: about },
        { path: '/contact', component: contact },
        { path: '*', component: notFind },
    ]
})
router.beforeEach((to, from, next) => {
    if (/\/post\/[1-9+]/.test(to.fullPath)) {
        axios.post('http://localhost:3000/backend/view', to.params );
    }
    next();
})

export default router;
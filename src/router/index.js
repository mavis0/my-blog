import Vue from 'vue';
import VueRouter from 'vue-router';
import coverBriefAll from '../components/coverBriefAll';
import posts from '../components/posts';
import about from '../components/about';
import contact from '../components/contact';
import post from  '../components/post';

Vue.use(VueRouter);

export default new VueRouter( {
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: coverBriefAll },
        { path: '/post/:id', component: post },
        { path: '/posts', component: posts },
        { path: '/about', component: about },
        { path: '/contact', component: contact },
    ]
});
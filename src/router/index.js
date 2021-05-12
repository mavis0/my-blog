import Vue from 'vue'
import VueRouter from 'vue-router'
import coverBriefAll from '../components/coverBriefAll'

Vue.use(VueRouter);

export default new VueRouter( {
    routes: [
        { path: '/', component: coverBriefAll}
    ]
});
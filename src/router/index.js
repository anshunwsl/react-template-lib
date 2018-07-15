import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '../examples/test/components/Hello.vue';
// import ImageCard from '../examples/test/components/ImageCard.vue';
// import BDExample from '../examples/bd/App.vue';
import gisRouter from './gisrouter';

import TestApp from '../pages/hello/HelloApp.vue';

import DseMap from '../common/DseMapApp.vue';
import MapPopupDemo from '../pages/popup/MapPopupDemo.vue';

// import ElTree from '../examples/eltree/App.vue';
//
// import Table from '../examples/singletable/App.vue';

// import ElEdit from '../examples/eledit/App.vue';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/hello',
            name: 'hello',
            component: TestApp
        },
        {
            path: '/map',
            name: 'map',
            component: DseMap
        },
        {
            path: '/popup',
            name: 'popup',
            component: MapPopupDemo
        }
    ].concat(gisRouter)
});

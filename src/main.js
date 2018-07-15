/**
 * @description 该文件为框架在开发时使用的主文件，在开发时为了能够预览各个模块的开发效果， 需要在此文件中引入当前模块中引入对应的库
 *
 * 例如： ./components 中的ImageCard.vue 文件使用了 bootstrap-vue这个库，则需要在这里引入才能在开发时看到效果。
 * */
import Vue from 'vue';
import VueHead from 'vue-head';
import Vuex from 'vuex';


import ELEMENT from 'element-ui';

import App from './App';
import router from './router';
import store from './store';

// import BootstrapVue from 'bootstrap-vue';
// Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(VueHead);

Vue.use(ELEMENT);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App},
    head: {
        meta: [
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
            }
        ]
    }
});

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// });


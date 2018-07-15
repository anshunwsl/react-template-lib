/**
 * @description 该文件为框架在开发时使用的主文件，在开发时为了能够预览各个模块的开发效果， 需要在此文件中引入当前模块中引入对应的库
 *
 * 例如： ./components 中的ImageCard.vue 文件使用了 bootstrap-vue这个库，则需要在这里引入才能在开发时看到效果。
 * */
import Vue from 'vue';

import App from './HelloApp.vue';


import ELEMENT from 'element-ui';

// Vue.use(BootstrapVue);
Vue.config.productionTip = false;
// Vue.use(VueHead);

Vue.use(ELEMENT);


new Vue({
    el: '#app',
    render: h => h(App)
});


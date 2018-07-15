<!--此文件为页面主主文件， 用于在开发时动态渲染各个组件的效果.
  备注: 需要将带有路由的子页面拆分为单个模块时，则需要在对应的main.js 引入这个文件， 详情可参见 ./examples/gis/main.js 模块.
-->
<template>

  <div id="app">
    <router-view style="min-width: 300px; width:100%;"></router-view>
  </div>

</template>

<script>


//  import './moduleConfig';
  /***/
  export default {
    data() {
      return {
        message: '前端页面开发时容器'
      };
    },
    created() {

    },
    methods: {}
  };
</script>

<style>

  /*@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";*/
</style>

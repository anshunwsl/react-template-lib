<template>
    <div class="container-fluid">

        <h1>{{msg}}</h1>

        <div>
            <p>框架信息请查看</p>

            <ul class="list-group">
                <li class="list-group-item">./README.md</li>
                <li class="list-group-item">./src/README.md</li>
            </ul>
        </div>
    </div>

</template>

<script>

    import {DSE} from '../../moduleConfig';


    require('../../../node_modules/bootstrap/scss/bootstrap.scss');
    //  require('./test.less');
    export default {
        //

        data() {
            //
            return {
                msg: '欢迎使用东深前端框架...',
                url: DSE.dseFrameworkUrl
            };
        }
    };
</script>

<style lang="scss">
    $name: 100px;

    .u-btn {
        //
        width: $name;
    }
</style>

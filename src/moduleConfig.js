/**
 * @description  项目中可根据需要扩展配置文件内容， 框架在升级时不会覆盖项目中扩展的配置.
 * */

import {DSE} from '../config/module.base.conf';

let packageConfig = require('../package.json');


//配置ArcGIS JS API 部署路径.
let baseGisUrl = 'http://localhost:8080/arcgis_js_api/library/4.7';

// DSE.loadCssWithRequireJS = false;

DSE.baseGisUrl = baseGisUrl;

// DSE.baseUrl = _serverPath;


//配置前端框架部署路径，可选
DSE.dseFrameworkUrl = 'http://10.100.3.213:8096/dseframework/';

// 配置自定义GIS库.
let projectUrl = DSE.baseUrl + '/pages/app/gisdemos/arcgis';

//Gis框架资源目录. 部署时.
// DSE.dseGisPath = packageConfig.projectName + '/node_modules/gisframework-web3d';
//开发时.
DSE.dseGisPath = `${DSE.baseUrl}src/amd`;
DSE.styleName = '/themes/default';


//兼容GIS框架.
window.dseGisPath = DSE.dseGisPath;
window.styleName = DSE.styleName;
window.DSE = DSE;
//获取地图中点击的几何对象的属性数据s
DSE.getGraphic = function () {
    return window.graphic || window.parent.graphic || {name: 'no data'};
};
/**
 * 地图相关配置，没有地图的模块可以忽略.
 * */
DSE.mapOptions = {
    //
    url: baseGisUrl + '/init.js',
    dojoConfig: {
        /**
         * =================================================================
         * 以下代码用于配置GIS库依赖库
         * @author wangsl
         * @date 2017-03-27
         * =================================================================
         * */
        packages: [
            {
                name: 'custom',
                location: projectUrl
            }, {
                name: 'dsegis',
                location: DSE.dseGisPath
            }, {
                name: 'gis',
                location: `${packageConfig.projectName}/amd` //兼容已发布的版本.
            }, {
                name: 'amd',
                location: `${packageConfig.projectName}/amd`
            }, {
                name: 'jquery',
                location: '/node_modules/jquery/dist/',
                main: 'jquery.min'
            },
            {
                name: 'lodash',
                location: '/node_modules/lodash/',
                main: 'lodash.min'
            }
        ]
        /**
         * 配置超图依赖库
         * @author wangsl
         * @date 2017-04-07
         * */
    },
};
//进行前后端分离开发时，设置后台接口根路径Url 跨域访问 server 时，需要配置代理进行跨域访问.
//示例, 为集群地址.
DSE.serverPath = '//localhost:8080/src/';

export {DSE};

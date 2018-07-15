let packageConfig = require('../package.json');

let _serverPath = (function () {
    var local = window.location;
    var contextPath = local.pathname.split('/')[1];
    var fullUrl = local.protocol + '//' + local.host + '/';
    //
    if (contextPath) {
        fullUrl += `/${contextPath}/`;
    }
    return fullUrl;
    // return local.protocol + '//' + local.host + '/' + contextPath + '/';
})();


const DSE = {};

let baseGisUrl = '//10.100.3.213:8096/arcgis_js_api/library/3.23';

DSE.loadCssWithRequireJS = false;
DSE.baseUrl = _serverPath;
DSE.baseGisUrl = baseGisUrl;
DSE.projectName = packageConfig.projectName;

//配置前端框架部署路径，可选
DSE.dseFrameworkUrl = 'http://10.100.3.213:8096/dseframework/';

// 配置自定义GIS库.
let projectUrl = DSE.baseUrl + '/pages/app/gisdemos/arcgis';

//Gis框架资源目录.
DSE.dseGisPath = packageConfig.projectName + '/node_modules/gisframework-arcgis';
DSE.styleName = '/themes/default';


//兼容GIS框架.
window.dseGisPath = DSE.dseGisPath;
window.styleName = DSE.styleName;

window.DSE = DSE;
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
        packages: [{
            name: 'custom',
            location: projectUrl
        }, {
            name: 'jquery',
            location: `${packageConfig.projectName}/node_modules/jquery/dist/jquery`
        }, {
            name: 'dsegis',
            location: `${packageConfig.projectName}/node_modules/gisframework-arcgis`
        },
            {
                name: 'config',
                location: '/src/'

            }, {
                name: 'amd',
                location: `${packageConfig.projectName}/amd`
            }
        ]
        /**
         * 配置超图依赖库
         * @author wangsl
         * @date 2017-04-07
         * */
    },
};
//进行前后端分离开发时，设置后台接口Url
DSE.serverPath = _serverPath;
//示例, 为集群地址.
// DSE.serverPath = '//localhost:8086/';


export {DSE};

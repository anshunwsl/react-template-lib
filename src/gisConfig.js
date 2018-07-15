/**
 * @description  GIS配置文件, 项目中可根据需要扩展配置文件内容， 框架在升级时不会覆盖项目中扩展的配置.
 * */

import {gisConfig} from '../config/gis.base.conf';
import {DSE} from '../config/module.base.conf';


// let local = window.location;
// let contextPath = local.pathname.split('/')[1];
// let basePath = local.protocol + '//' + local.host + '/' + contextPath;


//初始化范围,注意：在有些项目中可能会出现不同权限需要显示不同的地图范围，在程序中直接动态设置该值即可
// fullExtent format:[xmin,ymin,xmax,ymax]
// full extent example :{"type":"extent","xmin":12701016.333804656,"ymin":2575985.9415646303,"xmax":12709352.747202229,"ymax":2580213.8646917655,"spatialReference":{"wkid":102100,"latestWkid":3857}}
// fullExtent: [1.1418946097397627E7,2712886.7523683254,1.2361563064558089E7,3458633.9138223915],
// fullExtent: [12691108.670724759, 2571726.374727739, 12727798.444301592, 2590338.7911151545],
//11787810.121593211, 2509856.455319883, 12447010.750131978, 2830280.712021692
gisConfig.fullExtent = [12612777.300915288, 2575719.099957926, 12682067.467055706, 2615237.043581309];

//投影参数：1：经度坐标系；2：平面坐标系，3：百度坐标系
gisConfig.mapType = '2';


/**
 * 是否需要变换坐标.
 * */

gisConfig.isTransformCoordinate = true;

//
gisConfig.minZoom = 1;
//
gisConfig.maxZoom = 19;
//
gisConfig.zoom = 7;
//
gisConfig.minVisibleZoom = 1;
//代理服务器 地址前缀 如果不需要代理，数组置空
gisConfig.urlPrefixs = [];
//
//代理地址
gisConfig.proxyUrl = DSE.baseUrl + '/proxy.jsp';

gisConfig.baseMapLayers = [
    {

        id: 'gvec',
        type: 'google',
        url: 'vec',// google url有效值为 vec,img,ter中的一个
        img_src: DSE.styleName + '/img/maptype/jt1.png',
        name: '矢量图',
        initShow: false
    },
    {

        id: 'gimg',
        type: 'google',
        url: 'img',// google url有效值为 vec,img,ter中的一个
        img_src: DSE.styleName + '/img/maptype/dx1.png',
        name: '影像图',
        initShow: false
    },
    {

        id: 'gter',
        type: 'google',
        url: 'ter',// google url有效值为 vec,img,ter中的一个
        img_src: DSE.styleName + '/img/maptype/yx1.png',
        name: '地形图',
        initShow: true
    },

];

gisConfig.optionalLayers = [];

/**
 * GP服务地址配置信息 [可重置]
 * */
// gisConfig.gpUrls = [];

/**
 * 地图查询组件配置信息 [可重置]
 * */
// gisConfig.mapSearch = {};

/**
 * 地图对比信息 [可重置]
 * */

// gisConfig.mapCompare = {};

/**
 * 地图图例配置信息. [可重置]
 * */
// gisConfig.mapLegend = {};

/**
 * @description 配置卷帘图层. [可重置]
 * */
// gisConfig.mapSwipe = {};
export {gisConfig};

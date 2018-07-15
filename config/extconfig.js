/**
 * @description 打包工具默认压缩合并以 main.js  如果需要合并其他名称的文件，请在这个文件中配置.
 *
 * @author wangsl
 * @version 1.1.1
 * */

module.exports.entryPoints = {
    //
};

module.exports.mainPages = [
    // {
    //     template: "./src/views/testindex.html",
    //     filename: "gisindex.html",
    //     title: "tests,hi",
    //     chunks: ["typescript/main"]
    // },
    // {
    //     template: "./src/views/testindex.html",
    //     filename: "qshindex.html",
    //     title: "testshuohuohouo.i",
    //     chunks: ["typescript/en"]
    // },
    // {
    //     template: "./src/views/testindex.html",
    //     filename: "es6index.html",
    //     title: "buovuoo.i",
    //     chunks: ["es6/main"]
    // }
];

//跨域服务器配置.
module.exports.crossServers = {
    //
    '/arcgis_js_api/': 'http://localhost:8090',
    // "/mapData/": "http://10.100.9.52:8086",
    // "/google/": "http://mt0.google.cn",
    // "/common-syq/": 'http://10.100.9.30:8085'
};
//设置端口 默认为8080
module.exports.PORT = '8080';
//设置IP地址. 默认为 localhost
module.exports.ADDRESS = 'localhost';

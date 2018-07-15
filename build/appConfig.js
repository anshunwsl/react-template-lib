var fs = require("fs");
var path = require("path");

var extConfigData = require("../config/extconfig");
//
var mainPath = "src";

/**
 * @description 获取优化模块. 默认匹配以 *main.js 结尾的文件为主文件.
 *
 * @author wangsl
 * @version 1.1.0
 * */
function addOptModuleToBuildConfig(directory, isFirstCall) {
  // 当前文件为文件夹时
  var fullDir = isFirstCall ? path.join(process.cwd(), directory) : directory;
  //
  if (fs.statSync(fullDir).isDirectory()) {
    // debugger;
    var files = fs.readdirSync(fullDir);
    var len = files.length;
    if (len > 0) {

      files.forEach(function (file) {
        //
        var url = fullDir + "/" + file;
        if (fs.statSync(url).isDirectory()) {
          addOptModuleToBuildConfig(url, false);
        } else {
          addModuleToOpt(url);
        }
      });
    }
  } else {
    //设置优化模块
    addModuleToOpt(fullDir);
  }
}

var buildConfig = {};

/**
 * @description 添加需要优化的模块.
 * @param {String} directory
 * */
function addModuleToOpt(directory) {
  //设置优化模块.

  var appIndex = directory.lastIndexOf(mainPath);
  var startIndex = appIndex + mainPath.length + 1;

  if (/(main\.js$)|(main\.ts$)/.test(directory)) {
    //
    //
    var entryPointUrl = directory.substring(startIndex, directory.length - 3).replace(/(\\)/gi, "\/");
    // console.log(moduleUrl);
    //
    // var entryPoint = {};
    //
    // entryPoint[entryPointUrl] = "./" + directory.substring(appIndex, directory.length).replace(/(\\)/gi, "\/");
    // buildConfig.entryPoints[entryPointUrl] = "./" + directory.substring(appIndex, directory.length).replace(/(\\)/gi, "\/");

    var mainPoint = "./" + directory.substring(appIndex, directory.length).replace(/(\\)/gi, "\/");
    //不用重复加载主模块
    if (mainPoint !== './src/main.js') {
      buildConfig.entryPoints[entryPointUrl] = ['babel-polyfill', mainPoint];
      //读取需要分模块的模板.
      var pageUrl = directory.substring(appIndex, directory.length).replace(/(\\)/gi, "\/").replace(/main\.js$/, 'index\.html');

      var templateUrl = './' + pageUrl;
      if (templateUrl !== './src/index.html') {
        buildConfig.mainPages.push({
          // template: "./" + pageUrl,
          template: "./src/pagesindex.html",
          filename: pageUrl.substring(mainPath.length + 1, pageUrl.length),//"test/"+path.basename(directory),
          title: entryPointUrl,
          chunks: ['appConfig',entryPointUrl]
        });
      }
    }
    //
    // console.log(moduleUrl);
  }
  //设置页面入口.
  // if (/index\.html$/.test(directory)) {
  //   //
  //   var pageUrl = directory.substring(appIndex, directory.length).replace(/(\\)/gi, "\/");
  //   var shortUrl = directory.substring(startIndex, directory.length - 5).replace(/(\\)/gi, "\/");
  //   //
  //   var chunkIndex = shortUrl.lastIndexOf("\/");
  //   var mainChunk = shortUrl.substring(0, chunkIndex) + "/main";
  //
  //   var templateUrl = './' + pageUrl;
  //   if (templateUrl !== './src/index.html') {
  //     buildConfig.mainPages.push({
  //       // template: "./" + pageUrl,
  //       template: "./src/pagesindex.html",
  //       filename: pageUrl.substring(mainPath.length + 1, pageUrl.length),//"test/"+path.basename(directory),
  //       title: path.basename(directory, ".html"),
  //       chunks: [mainChunk]
  //     });
  //   }
  // }
}

//
buildConfig.entryPoints = {};
buildConfig.mainPages = [];
//
addOptModuleToBuildConfig(mainPath, true);

/**
 * 扩展参数.
 * */
if (extConfigData) {
  //
  if (extConfigData.entryPoints) {
    //
    for (var key in extConfigData.entryPoints) {
      //
      buildConfig.entryPoints[key] = extConfigData.entryPoints[key];
    }
  }
  //
  if (extConfigData.mainPages) {
    //
    buildConfig.mainPages = buildConfig.mainPages.concat(extConfigData.mainPages || [])
  }
}

module.exports.mainPages = buildConfig.mainPages;
module.exports.entryPoints = buildConfig.entryPoints;

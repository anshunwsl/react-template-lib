/**
 * @description 打包 amd模块.
 * @version 1.1.0
 * @author wangsl
 * */
let path = require('path');
let fs = require('fs');
let configData = require('../../package.json');

//
let dirPath = '';
//
if (/^\//.test(configData.projectName)) {
    //
    dirPath = `../..${configData.projectName}/amd`;
} else {
    //
    dirPath = `../../${configData.projectName}/amd`;
}
let buildConfig = {
    //
    // appDir: '../../src/amd',
    appDir: dirPath,
    baseUrl: '.',
    dir: dirPath,
    optimize: 'uglify2',
    // optimizeCss: 'standard.keepLines.keepWhitespace',
    throwWhen: {optimize: false},

    locale: 'en-us',
    inlineText: true,
    allowSourceOverwrites:true,
    keepBuildDir:true,
    optimizeCss: 'standard',
    // fileExclusionRegExp: /test|tests|min|src/gi

};


let content = `(${JSON.stringify(buildConfig)});`;
//
let savePath = path.join(process.cwd(), './build/amd/build.js');
fs.writeFile(savePath, content, function (error, content) {
    //
    if (error) {
        //
        console.log(error.message);
        return;
    }
    //
    // console.log(content);
});

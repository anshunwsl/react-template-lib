'use strict';

/**
 * @description  复制框架文件.
 * */
class DseCopyPlugin {
    apply(compiler) {
        compiler.plugin("done", (stats) => {
            const configData = require("../../package.json");
            const fileUtils = require('../fileUtils');
            const path = require('path');
            let current = process.cwd();
            let target = path.join(current, "/dist");
            // fileUtils.createDirectory("/dist");
            fileUtils.createDirectory("/dist/node_modules");
            let files = fileUtils.getCopyFiles(configData);
            files.forEach(function (directory, index) {
                //
                let sources = path.join(current, directory);
                let targets = path.join(target, directory);
                fileUtils.copyFileOrDirectory(sources, targets);
            });
        });
    }
}

module.exports = DseCopyPlugin;
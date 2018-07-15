let fs = require('fs');
let path = require('path');
let utils = require('./utils');
let webpack = require('webpack');
let config = require('../config');
let merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.conf');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
let SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
let loadMinified = require('./load-minified');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let CleanWebpackPlugin = require("clean-webpack-plugin");

// let DseCopyPlugin = require('./plugins/DseCopyPlugin');


const configData = require("../package.json");
const fileUtils = require('./fileUtils');
let files = fileUtils.getCopyFiles(configData);

let appConfigData = require("./appConfig");
// let extConfigData = require("./extconfig");

let rootDir = configData.projectName.split('\/')[1];
let globsFiles = rootDir + '/**/*.{js,html,css}';

let staticFiles = '../static';

let htmlPlugins = [];
//
appConfigData.mainPages.forEach((item, index) => {
    //
    let plugin = new HtmlWebpackPlugin({
        //
        template: item.template,
        filename: item.filename,
        title: item.title,
        chunks: item.chunks,
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency',

        serviceWorkerLoader: `<script>${fs.readFileSync(path.join(__dirname,
            './service-worker-prod.js'), 'utf-8')}</script>`
    });
    //
    htmlPlugins.push(plugin);
});

let prePlugins = [
    new webpack.LoaderOptionsPlugin({options: {}}),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    // 提取CSS
    new ExtractTextPlugin({
        filename: utils.assetsPath('[name].bundle.css')
        // filename: utils.assetsPath('[name].[md5:contenthash:hex:15].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
        cssProcessorOptions: {
            safe: true
        }
    }),
    //生成HTML
    new HtmlWebpackPlugin({
        filename: process.env.NODE_ENV === 'testing'
            ? 'index.html'
            : config.build.index,
        template: './src/index.html',
        inject: true,
        chunks: ['appConfig', 'app'],
        title: '',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency',
        serviceWorkerLoader: `<script>${loadMinified(path.join(__dirname,
            './service-worker-prod.js'))}</script>`
    }),

    // 复制资源文件.
    new CopyWebpackPlugin([
        {
            from: path.resolve(__dirname, staticFiles),
            to: config.build.assetsSubDirectory,
            ignore: ['.*']
        }
    ]),
    // service worker caching
    new SWPrecacheWebpackPlugin({
        cacheId: 'dse-vue-app',
        filename: 'service-worker.js',
        // staticFileGlobs: ['dist/**/*.{js,html,css}'],
        staticFileGlobs: [globsFiles],
        minify: true,
        // stripPrefix: 'dist/'
        stripPrefix: rootDir + '/'
    }),

    //copy files..
    new CleanWebpackPlugin([rootDir]),
    //GIS 工具打包时修改，此处和标准前端框架库有所区别.
    // @author wangsl.
    new CopyWebpackPlugin([
        {
            from: './src',
            to: '',
            ignore: ['*.js', '*.vue', '*.scss', '*.ts', '*.less', '*.html', '*.md', 'package.json', 'package-lock.json', 'amd/**']
        },
        {
            from: './src/amd',
            to: 'amd',
            ignore: ['*.ts', '*.js.map', 'interfaces/**', '*.md', '']
        }
    ].concat(files))
];

let allPlugins = prePlugins.concat(htmlPlugins);


let webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    // entry: {
    //   // app: ['babel-polyfill', './src/main.js'],
    //   vue: ['babel-polyfill', './src/vue/main.js'],
    //   gis: ['babel-polyfill', './src/examples/gis/main.js'],
    //   // ts: ['./src/typescript/main.ts'],
    // },
    //
    entry: appConfigData.entryPoints,

    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        // filename: utils.assetsPath('[name].[chunkhash:15].js'),
        // chunkFilename: utils.assetsPath('[id].[chunkhash:15].js')
        filename: utils.assetsPath('[name].bundle.js'),
        chunkFilename: utils.assetsPath('[id].bundle.js')
    },
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                exclude: /(^0.bundle.js)/i,
                uglifyOptions: {
                    compress: false,
                    ecma: 5,
                    mangle: true
                },
                sourceMap: true
            })
        ],
        splitChunks: {
            cacheGroups: {
                'appConfig': {
                    test: /Config.js$/gi,
                    name: "appConfig",
                    chunks: "all",
                    minChunks: 1,
                    enforce: true,
                    priority: 10
                }
            }
        }
    },
    plugins: allPlugins
});

if (config.build.productionGzip) {
    let CompressionWebpackPlugin = require('compression-webpack-plugin');

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

if (config.build.bundleAnalyzerReport) {
    let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig;

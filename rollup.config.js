import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from '@rollup/plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import {terser} from 'rollup-plugin-terser';
import {sizeSnapshot} from 'rollup-plugin-size-snapshot';


//
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
//

import {PROJECT_NAME} from "./config/index";

const input = './src/common/index.ts';
const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};
const babelOptions = {
    exclude: /node_modules/,
    // We are using @babel/plugin-transform-runtime
    runtimeHelpers: true,
    extensions: ['.js', '.ts', '.tsx'],
    // configFile: path.resolve(__dirname, '../../../babel.config.js'),
};
const commonjsOptions = {
    ignoreGlobal: true,
    // include: /node_modules/,
    // namedExports: {
    //   '../../node_modules/prop-types/index.js': [
    //     'elementType',
    //     'bool',
    //     'func',
    //     'object',
    //     'oneOfType',
    //     'element',
    //   ],
    //   '../../node_modules/react/jsx-runtime.js': ['jsx', 'jsxs'],
    //   '../../node_modules/react-is/index.js': [
    //     'ForwardRef',
    //     'isFragment',
    //     'isLazy',
    //     'isMemo',
    //     'Memo',
    //     'isValidElementType',
    //   ],
    // },
};
const nodeOptions = {
    extensions: ['.js', '.tsx', '.ts'],
};

function onwarn(warning) {
    if (
        warning.code === 'UNUSED_EXTERNAL_IMPORT' &&
        warning.source === 'react' &&
        warning.names.filter((identifier) => identifier !== 'useDebugValue').length === 0
    ) {
        // only warn for
        // import * as React from 'react'
        // if (__DEV__) React.useDebugValue()
        // React.useDebug not fully dce'd from prod bundle
        // in the sense that it's still imported but unused. Downgrading
        // it to a warning as a reminder to fix at some point
        console.warn(warning.message);
    } else {
        throw Error(warning.message);
    }
}

export default [
    {
        input,
        onwarn,
        output: {
            // file: 'build/umd/material-ui.development.js',
            file: `${PROJECT_NAME}/index.dev.js`,
            format: 'umd',
            name: 'SlashGis',
            globals,
        },
        external: Object.keys(globals),
        plugins: [
            nodeResolve(nodeOptions),
            babel(babelOptions),
            commonjs(commonjsOptions),
            //
            typescript({
                //
                tsconfig: "./tsconfig.json"
            }),
            copy({
                //
                targets: [
                    {
                        src: "./src/common/index.d.ts",
                        dest: `${PROJECT_NAME}`
                    },
                    //
                    {
                        src: "./src/common/types",
                        dest: `${PROJECT_NAME}`
                    }
                ]
            }),
            //
            del({
                //
                targets: [`${PROJECT_NAME}/`]
            }),
            //
            scss(),
            nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
            replace({'process.env.NODE_ENV': JSON.stringify('development')}),
        ],
    },
    {
        input,
        onwarn,
        output: {
            // file: 'build/umd/material-ui.production.min.js',
            file: `${PROJECT_NAME}/index.js`,
            format: 'umd',
            name: 'SlashGis',
            globals,
        },
        external: Object.keys(globals),
        plugins: [
            nodeResolve(nodeOptions),
            babel(babelOptions),
            commonjs(commonjsOptions),
            nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
            replace({'process.env.NODE_ENV': JSON.stringify('production')}),
            //
            typescript({
                //
                tsconfig: "./tsconfig.json"
            }),
            scss(),
            sizeSnapshot({snapshotPath: 'size-snapshot.json'}),
            terser(),
        ],
    },
];

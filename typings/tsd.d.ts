/// <reference path="node/node.d.ts" />
/// <reference path="../node_modules/dojo-loader/typings/dojo-loader/dojo-loader-2.0.0-alpha.4.d.ts" />

declare module 'electron' {
    const electron: any;
    export = electron;
}
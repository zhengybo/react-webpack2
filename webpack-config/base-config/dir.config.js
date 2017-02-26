const path = require('path');
const moduleExports = {};
//项目根目录
moduleExports.RootDir = path.resolve(__dirname, '../../');
//项目源代码目录
moduleExports.srcDir = path.resolve(moduleExports.RootDir, './src');
//项目源代码入口目录
moduleExports.entryDir = path.resolve(moduleExports.srcDir, './entry');
//项目打包目录
moduleExports.assetsDir = path.resolve(moduleExports.RootDir, './assets');
//css,scss位置
moduleExports.cssDir = path.resolve(moduleExports.srcDir, './css');
//组件位置
moduleExports.componentsDir = path.resolve(moduleExports.srcDir, './components');
//js第三方库或不常用代码存放
moduleExports.jsDir = path.resolve(moduleExports.srcDir, './js');
//图片位置
moduleExports.imagesDir = path.resolve(moduleExports.srcDir, './images');
//模拟数据位置
moduleExports.mockDir = path.resolve(moduleExports.srcDir, './mock');

module.exports = moduleExports;

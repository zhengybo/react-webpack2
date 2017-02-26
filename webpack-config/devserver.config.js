const dirVars = require('./base-config/dir.config.js');
module.exports =  {//构建本地服务
  contentBase:dirVars.assetsDir,//本地服务器所加载的页面所在的目录
  port:3000,
  historyApiFallback: true,//不跳转
  inline: true//实时刷新
}

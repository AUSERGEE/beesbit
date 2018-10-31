const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
const BASE_URL = process.env.NODE_ENV === 'production' ?
  './' :
  '/'


module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('#', resolve('src/components'))
  },

  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true, //console
              drop_debugger: false,
              pure_funcs: ['console.log'] //移除console
            }
          }
        })
      ]
    }
  },
  productionSourceMap: true,

  baseUrl: BASE_URL,
  lintOnSave: false,
  outputDir: 'beesbit',
  assetsDir: 'assest',
  pluginOptions: { // 第三方插件配置
  },
  runtimeCompiler: true,
  productionSourceMap: true,
}

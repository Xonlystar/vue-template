const path = require('path')
module.exports = {
  baseUrl: '/', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  devServer: {
    port: 4001,
    host: '0.0.0.0',
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://bankliquidation-saas-admin-test.51fubei.com/admin',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('api', path.resolve(__dirname, './src/api'))
      .set('assets', path.resolve(__dirname, './src/assets'))
      .set('components', path.resolve(__dirname, './src/components'))
      .set('config', path.resolve(__dirname, './src/config'))
      .set('filters', path.resolve(__dirname, './src/filters'))
      .set('mixins', path.resolve(__dirname, './src/mixins'))
      .set('pages', path.resolve(__dirname, './src/pages'))
      .set('router', path.resolve(__dirname, './src/router'))
      .set('style', path.resolve(__dirname, './src/styles'))
      .set('utils', path.resolve(__dirname, './src/utils'))
      .set('store', path.resolve(__dirname, './src/store'))
  }
}

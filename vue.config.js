const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '',
  transpileDependencies: ['vuetify'],
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
});

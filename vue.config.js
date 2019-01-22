const path = require('path')
//path.join只是简单的将该路径片段进行拼接
const resolve = dir => path.join(__dirnasme,dir)
//设置开发环境的访问路径
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/precheng/' :'/'

module.exports = {
    lintOnSave : false,
    baseUrl :BASE_URL,
    chainWebpack: config => {
        config.resolve.alias
        .set('@',resolve('src')) // 将@代替项目下的src目录
        .set('_c',resolve('src/components'))
    },
    //打包时不生成.map 文件
    procutionSourceMap:false,
    //跨域配置
    devServer:{
        proxy:'http://location:4000' // 将没有静态文件的资源都匹配到这
    }
}
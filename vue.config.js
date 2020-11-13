module.exports = {
    devServer:{
        host: "0.0.0.0",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器  
        hot: true, // 热更新
    },
    runtimeCompiler:true,
    chainWebpack: config => {        // 修复HMR
        config.resolve.symlinks(true)
    },
    css: {  
        extract: true,
    }
}

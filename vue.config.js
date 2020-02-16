const path = require('path')
module.exports = {
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/variables.scss";`
            }
        }
    },
    chainWebpack: (config) => {
        config.module
            .rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
        config.resolve.alias.set('@assets', path.join(__dirname, 'src/assets'))
    }
}

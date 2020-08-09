const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        }
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/styles/main.scss";`
            }
        }
    }
}

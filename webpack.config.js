const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .copyFiles({
        from: './node_modules/@sweetalert2/theme-dark/',
        to: 'vendor/@sweetalert2/theme-dark/[path][name].[ext]',
    })
;

module.exports = Encore.getWebpackConfig();

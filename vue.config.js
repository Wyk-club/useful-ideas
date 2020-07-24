module.exports = {
    // 使用vscode调试前，需要更新webpack配置以构建source map
    configureWebpack: {
        devtool: 'source-map'
    },
    lintOnSave: false
}
const root =  require('app-root-path').path

module.exports = {
    entry    : `./src/index.js`,
    target   : `node`,
    externals: [/^[a-z\-0-9]+$/], // ignore node_modules
    output   : {
        filename: 'index.js',
        path    : `${root}/dist`
    }
}
const path = require('path');

module.exports = {
    entry: './project/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use:'babel-loader',
                test:/\.js$/
            }
        ]
    }
}
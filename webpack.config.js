const path = require('path')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bandle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                use: [
                    {
                        loader: "babel-loader",
                        options: { presets: ["@babel/preset-env"] }
                    }
                ]
            }
        ]
    }
}
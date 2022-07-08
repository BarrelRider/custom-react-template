const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {minimize: true}
                }]
            }, {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: {
                                    browsers: ["last 2 Chrome versions"]
                                }
                            }]
                        ]
                    }
                }
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "images",
                        name: "[name].[ext]"
                    }
                }]
            }, {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "fonts",
                        name: "[name].[ext]"
                    }
                }]
            }, {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 2
                        },
                    },
                    "sass-loader"
                ]
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};

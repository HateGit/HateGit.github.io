const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: './src/index.js',
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        // creates style nodes from JS strings
                        loader: "style-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // compiles Sass to CSS
                        loader: "sass-loader",
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }
                  
                    // Please note we are not running postcss here
                ]
            },  
            {
                test: /\.woff$/,
                loader: 'url-loader',
                options: {
                    // Limit at 50k. Above that it emits separate files
                    limit: 50000,
                    // url-loader sets mimetype if it's passed.
                    // Without this it derives it from the file extension
                    mimetype: 'application/font-woff',
                    // Output below fonts directory
                    name: './fonts/[name].[ext]',
                },
            }
            ,
            {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // On development we want to see where the file is coming from, hence we preserve the [path]
                            name: '[path][name].[ext]?hash=[hash:20]',
                            limit: 8192
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'form-reg.html',
          template: './form-reg.html'
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'form-entry.html',
          template: './form-entry.html'
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'profile.html',
          template: './profile.html'
        }),
        // new HtmlWebpackPlugin({  // Also generate a test.html
        //   filename: 'profile.html',
        //   template: './profile.html'
        // }),
        // new HtmlWebpackPlugin({  // Also generate a test.html
        //   filename: 'profile.html',
        //   template: './profile.html'
        // })
    ]
};

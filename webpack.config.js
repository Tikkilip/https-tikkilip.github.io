const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = 'style-loader';



const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                collapseWhitespace: false
            }
        }),

        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                     loader: 'css-loader',
                     options: {
                        sourceMap: true,
                     }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|webp|webm|ico)$/,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: 'img/'
                      }
                    }
                  ] 
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ] 
            },
        ],
    },
    watch: true
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};

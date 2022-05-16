const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");




module.exports ={
    mode: 'production',
    entry: {
       app: path.resolve(__dirname, 'src/js/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    module:{
        rules:[
            {
                test:/\.s[ac]ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    "postcss-loader",
                    'sass-loader'
                ],                            
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {              
                    name: '[name].[ext]',                 
                    outputPath: 'images/',
                    publicPath: 'images/',
                    esModule: false
                },
            }
            
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Frontend Mentor | Interactive comments section',
            filename:'index.html',
            template: 'src/template.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name][contenthash].css',
            chunkFilename: "[id].css"
        }),
        // new PurgeCSSPlugin({
        //     paths:glob.sync(path.join(__dirname,'src/*.html')),
        //     minimalize:true
        //   }),
    ]
}
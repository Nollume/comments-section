const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports ={
    mode: 'development',
    entry: {
       app: path.resolve(__dirname, 'src/js/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    devtool:'source-map',
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 8080,
        hot:true,
        compress:true,
        historyApiFallback:true,
             
    },
    module:{
        rules:[
            {
                test:/\.s[ac]ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],                            
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
        })
    ]
}
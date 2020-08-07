const webpack = require ('webpack')
const path = require ('path')
const CopyWebpackPlugin = require ('copy-webpack-plugin')
const HTMLWebpackPlugin = require ('html-webpack-plugin')
const MiniCssExtractPlugin = require ('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require ('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require ('terser-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV ==="development"
const isProd =! isDev

const JSLoader =()=>{
  let loaders = [{
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    },
  }]
  if(isDev){
    loaders.push('eslint-loader')
  }
  return loaders
}

const optimization=()=>{
  let config = {
    splitChunks: {
      //load libraries only once
      chunks: 'all'
    }
  }
  if(isProd){
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config
}

const filename = ext =>{
  return isDev ? `[name].[hash].${ext}` : `[name].${ext}`
}

const css_loaders = (extra)=>{
  let loader = [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: isDev,
      reloadAll: true,
    }},
    'css-loader']
    if(extra){
      loader.push(extra)
    }
    return loader
}

module.exports = {
  context: path.resolve(__dirname, "src"),
  //if mode is not given, setting its default entity
  mode : 'development',
  //main js file
  entry : ['@babel/polyfill', '@js/script.js'],

  output : {
    //giving auto filename
    filename: filename('js'),
    //passing output location
    path : path.resolve(__dirname, 'dist'),
  },

  optimization:optimization(),
  devtool: isDev? 'source-map':'',
  devServer:{
    port: 5652,
    hot: isDev,
  },
  resolve :{
    //no need to write this extensions
    extensions:['.js', '.json', '.jpg', '.png'],
    //quick path binding
    alias: {
      '@assets': path.resolve(__dirname,'assets'),
      '@src': path.resolve(__dirname,'src'),
      '@css': path.resolve(__dirname,'src/css'),
      '@js': path.resolve(__dirname,'src/js'),
      '@html': path.resolve(__dirname,'src/html'),
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      title : 'Image Slider',
      template: './html/index.html',
      minify:  !isDev,
    },
    ),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
      {
      from: path.resolve(__dirname,'assets/img/favicon.png'),
      to: path.resolve(__dirname,'dist')
      }
    ]}),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  //loaders in order to make webpack read this extensions
  module:{
    rules:[
      {
        test: /\.css$/,
        use: css_loaders(),
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [{
          loader: 'file-loader',
        options: {
          esModule: false,
        }}],
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: ['file-loader']
      },
      {
        test: /\.(s[ac]ss)$/,
        use: css_loaders('sass-loader'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: JSLoader(),
      },
    ]
  }
}

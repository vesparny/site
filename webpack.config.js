import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

module.exports = {
  devtool: 'false',
  entry: [
    path.join(__dirname, 'react-layouts/main.js')
  ],
  output: {
    path: path.join(__dirname, 'build/dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }, {
      test: /\.ttf$/,
      loader: 'file?name=public/fonts/[name].[ext]'
    }]
  }
}

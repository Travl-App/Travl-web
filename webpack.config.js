const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src', 'client', 'app', 'index.jsx'),

  ],
  output: {
    path: path.join(__dirname, 'src', 'client', 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src', 'client', 'app'),
        use: {
          loader: 'babel-loader',
          options: {
              presets: [
                ['@babel/preset-react'],
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ],
            }
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.(sass|scss)$/,

        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src', 'client', 'public'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/style.bundle.css',
      allChunks: true,
    }),

  ],
};

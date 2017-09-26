const HtmlWebpackConfig = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new HtmlWebpackConfig({
      template: './src/index.html',
    }),
  ],
};

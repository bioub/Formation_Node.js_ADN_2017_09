const HtmlWebpackConfig = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js',
  },
  devtool: 'sourcemap',
  plugins: [
    new HtmlWebpackConfig({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ["env", {
                targets: {
                  browsers: ["Chrome >= 59", "IE >= 11"]
                }
              }]
            ]
          }
        }
      }
    ]
  }
};

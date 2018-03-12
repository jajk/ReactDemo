module.exports = {
  devtool: 'sourcemap',
  entry: {
      bundle: './index.js'
  },
  output: {
    path: __dirname,
      filename: '[name].js'
  },
  module: {
      rules: [{
          test: /\.js$/,
          use: [{
              loader: 'babel-loader'
          }],
          include: __dirname,
          exclude: /node_modules/
      }]
  }
};

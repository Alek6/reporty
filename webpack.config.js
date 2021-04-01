
const path = require('path');

module.exports = {
	mode: 'development',
  entry: [
    './src/app.ts',
    './src/index.ts'
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '_bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  }
};
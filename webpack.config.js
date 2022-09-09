module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
      path: `${__dirname}/src/dist`,
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', {loader: 'css-loader'}],
      }]
    },
    target: 'node',
    resolve: {
      extensions: [".js", ".jsx"]
    },
  }
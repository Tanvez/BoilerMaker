module.expors = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  devtool: 'source-map',
  moudle:{
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options:{
        presets: ['react']
      }
    }]
  }
};

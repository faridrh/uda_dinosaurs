module.exports = {
  entry: './script/app.js',
  devtool: 'inline-source-map',
  module: {
  rules: [
    {
      test: /\.tsx?$/,
      use:'ts-loader' ,
      exclude: /node_modules/
    }
  ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js','.json' ]
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: false
  }
};

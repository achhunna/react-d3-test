const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: 'css/main.css',
  allChunks: true
});
module.exports = {
  entry: ['./jsx/app.jsx', './scss/main.scss'],
  output: {
    path: __dirname,
    filename: 'js/app.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node-modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react', 'es2015'
          ],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.(sass|scss)$/,
        loader: extractSass.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    extractSass
  ],

}

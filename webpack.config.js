const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'bundle[fullhash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    }),
    new CssPlugin({
      filename: 'styles[fullhash].css'
    }),
    new CopyPlugin({
      patterns: [        
        { from: './src/data.json', to: './' }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "68",
                    "safari": "11.1",
                    "ie": "9"
                  }
                }
              ],
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          CssPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 5500,
    static: {
      directory: path.join(__dirname, 'client')
    },
    devMiddleware: {
      writeToDisk: true
    },
    open: true,
    historyApiFallback: true
  }
};
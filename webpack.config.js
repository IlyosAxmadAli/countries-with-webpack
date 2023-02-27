const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: "production", //development
  entry: {
    main: path.resolve(__dirname, "./src/js/main.js"),
    about: path.resolve(__dirname, "./src/js/about.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Contries | Home",
      template: "./src/indexTemp.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      title: "Contries | About",
      template: "./src/pages/aboutTemp.htm",
      filename: "about.html",
      chunks: ["about"],
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ],
  },
  devServer:{
    static:{
        directory:path.resolve(__dirname,'public')
    },
    port:3000,
    open:true,
    hot:true,
    compress:true,
    historyApiFallback:true
  },
};

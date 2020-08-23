const CopyPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.min.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: ".(js|css)$",
      template: __dirname + `/index.html`,
      filename: __dirname + `/dist/index.html`,
      inject: "head",
    }),
    new HtmlWebpackPlugin({
      inlineSource: ".(js|css)$",
      template: __dirname + `/photos.html`,
      filename: __dirname + `/dist/photos.html`,
      inject: "head",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/,
        loaders: ["url-loader"],
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        loaders: ["url-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images/",
          publicPath: "images/",
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 5500,
  },
};

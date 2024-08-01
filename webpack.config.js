const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require("dotenv-webpack")

const isProduction = process.env.NODE_ENV === "production"
const styleLoaderHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader"

module.exports = {
  entry: path.resolve(__dirname, "src", "App.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[name][hash][ext]",
  },
  devtool: isProduction ? "source-map" : "eval-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    host: "localhost",
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    onListening: function (devServer) {
      if (isProduction) {
        throw new Error("webpack-dev-server is not allowed")
      }

      const port = devServer.server.address().port
      console.log(`Port: ${port}`)
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [styleLoaderHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "template.html"),
      filename: "index.html",
      title: "Homework",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name][contenthash].css",
    }),
    new Dotenv({
      path: "./.env.example",
      safe: true,
    }),
  ],
}

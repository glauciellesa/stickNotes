const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "development",
  entry: "./src/script.js",
  output: {
    filename: "main.js",
    path: __dirname + "/public",
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/ /* expressao regular = / /  , extensao arquivo terminada em ____$ */,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", //interpreta @import, url()...
          "sass-loader",
        ],
      },
    ],
  },
}

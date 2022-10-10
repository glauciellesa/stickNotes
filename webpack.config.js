const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "development",
  entry: "./src/entrypoint.js",
  output: {
    filename: "script.js",
    path: __dirname + "/public",
  },
  plugins: [new MiniCssExtractPlugin()],
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

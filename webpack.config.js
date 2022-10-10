const path = require("path")
const fs = require("fs")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// Look for .html files
const htmlFiles = []
const directories = ["src"]
while (directories.length > 0) {
  const directory = directories.pop()
  const dirContents = fs
    .readdirSync(directory)
    .map((file) => path.join(directory, file))

  htmlFiles.push(...dirContents.filter((file) => file.endsWith(".html")))
  directories.push(
    ...dirContents.filter((file) => fs.statSync(file).isDirectory()),
  )
}

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "development",
  entry: "./src/entrypoint.js",
  output: {
    filename: "script.js",
    path: __dirname + "/public",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./public"),
    },

    compress: true,
    port: 8080,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    // Build a new plugin instance for each .html file found
    ...htmlFiles.map(
      (htmlFile) =>
        new HtmlWebpackPlugin({
          template: htmlFile,
          filename: htmlFile.replace(path.normalize("src/"), ""),
          inject: false,
        }),
    ),
  ],
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

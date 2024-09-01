const path = require("path");

module.exports = {
  entry: "./src/client.js",
  output: {
    path: path.resolve("dist"),
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

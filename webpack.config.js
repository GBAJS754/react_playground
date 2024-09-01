const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // 엔트리 파일
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // JavaScript 및 JSX 파일에 대해
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Babel 로더를 사용하여 ES6+ 및 JSX를 트랜스파일링
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // 확장자 생략 가능하게
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML 템플릿 파일
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000, // 개발 서버 포트 설정
  },
};

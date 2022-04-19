const path = require("path")
module.export = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }, {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        use: ["@svg/webpack"]
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: ["file-loader", {
          loader: "image-webpack-loader",
          options: {
            bypassOnDebug: true,
            disanle: true,
          }
        }]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader",  "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
}
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    open: true,
    port: 8080,
    watchFiles: ["src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Odin Restaurant Page",
      template: "./src/template.html",
    }),
  ],
};

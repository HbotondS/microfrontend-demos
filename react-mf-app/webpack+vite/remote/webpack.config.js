const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    publicPath: 'http://localhost:3000/',
  },

  devServer: {
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Counter": "./src/Counter.tsx"
      },
      shared: {
        react: {
          singleton: true
        },
        "react-dom": {
          singleton: true
        },
      }
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ]
};

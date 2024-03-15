const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebPackPlugin = require("html-webpack-plugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: 'https://fantastic-space-pancake-7rw7qg4g7rvhwqr-3000.app.github.dev/',
  },

  devServer: {
    port: 3000
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
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
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"]
        },
      }
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ]
};

/* eslint-env node */

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const packageData = require("./package.json");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { merge } = require("webpack-merge");

const shared = {
  // Turns on tree-shaking and minification in the default Terser minifier
  // https://webpack.js.org/plugins/terser-webpack-plugin/
  mode: "production",
  devtool: false,
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        // exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  optimization: {
    // Disable compression because it makes debugging more difficult for KolMafia
    minimize: false,
  },
  performance: {
    // Disable the warning about assets exceeding the recommended size because this isn't a website script
    hints: false,
  },
  plugins: [],
  externals: {
    // Necessary to allow kolmafia imports.
    kolmafia: "commonjs kolmafia",
    // Add any ASH scripts you would like to use here to allow importing. E.g.:
    // "canadv.ash": "commonjs canadv.ash",
  },
};

const entry = merge(
  {
    entry: {
      // Define files webpack will emit, does not need to correspond 1:1 with every typescript file
      // You need an emitted file for each entrypoint into your code, e.g. the main script and the ccs or ccs consult script it calls
      candyWrapper: "./src/main.ts",
    },
    output: {
      path: path.resolve(__dirname, "KoLmafia", "scripts", packageData.name),
    },
  },
  shared,
);

const relay = merge(
  {
    entry: {
      // Define files webpack will emit, does not need to correspond 1:1 with every typescript file
      // You need an emitted file for each entrypoint into your code, e.g. the main script and the ccs or ccs consult script it calls
      relay_candyWrapper: "./src/relay.ts",
    },
    output: {
      path: path.resolve(__dirname, "KoLmafia", "relay"),
    },
  },
  shared,
);

module.exports = [entry, relay];

module.exports = {
  entry: "./public/js/app/index.js",
  output: {
  path: __dirname,
    filename: "/public/js/app.bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};

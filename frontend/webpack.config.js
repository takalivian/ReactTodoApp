module.exports = {
  entry: {
    app: './index.js',
  },

  output: {
    // path: '../app/assets/javascripts/webpack',
    filename: 'react_components.js',
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        }
      },
    ]
  },
}
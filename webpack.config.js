const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/PostData.js',
  plugins: [
    new Dotenv(),
  ],
};

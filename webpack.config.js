const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new Dotenv(),
  ],
};

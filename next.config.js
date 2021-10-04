const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.plugins.unshift(new TsconfigPathsPlugin({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }));
    return config;
  },
}

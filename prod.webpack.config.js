const { merge } = require("webpack-merge");
const base = require("./base.webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(base, {
  mode: 'production',
  output: {
    publicPath: '/karumi-jobtest/',
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            name: './media/[name].[hash].[ext]',
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].[chunkhash].css',
      chunkFilename: '[id].css',
    }),
  ],
});
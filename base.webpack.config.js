const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default
const styledComponentsTransformer = createStyledComponentsTransformer()
const path = require('path')

const basePath = __dirname

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets/"),
      api: path.resolve(__dirname,"./src/api/"),
      components: path.resolve(__dirname, "./src/components/"),
      containers: path.resolve(__dirname, "./src/containers/"),
      model: path.resolve(__dirname,"./src/model/"),
      pages: path.resolve(__dirname,"./src/pages/"),
      styles: path.resolve(__dirname, "./src/styles/"),
      utils: path.resolve(__dirname, "./src/utils/"),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  entry: {
    app: ['regenerator-runtime/runtime', './main.tsx'],
    appStyles: ["./styles/theme.css"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          useCache: true,
          babelCore: '@babel/core',
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    new CheckerPlugin(),
  ],
}

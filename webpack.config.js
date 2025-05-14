const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'aero-string-formatter',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  optimization: {
    minimize: true,
    usedExports: false,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              declaration: true, // Генерируем .d.ts
              declarationDir: path.resolve(__dirname, 'types')
            }
          }
        },
        exclude: /node_modules/,
      },
    ],
  },
};
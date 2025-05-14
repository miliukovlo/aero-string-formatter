const path = require('path');

module.exports = {
  mode: 'production', // или 'development' для разработки
  entry: './src/index.ts', // путь к вашему файлу index.ts
  output: {
    filename: 'bundle.js', // имя выходного файла
    path: path.resolve(__dirname, 'dist'), // директория для выходного файла
    libraryTarget: 'umd', // Поддержка CommonJS, AMD и глобальных переменных
    globalObject: 'this'
  },
  optimization: {
    minimize: true,
    usedExports: true
  },
  resolve: {
    extensions: ['.ts', '.js'], // расширения файлов, которые нужно обрабатывать
  },
  module: {
    rules: [
      {
        test: /.ts$/, // обрабатываем только .ts файлы
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

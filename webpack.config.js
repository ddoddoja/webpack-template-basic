//** node js 환경에서 작용한다.  */

//import 
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export 
module.exports = {
  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  //  결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'public'),
    // filename: 'main.js',
    clean:true
  }, 

  module: {
    rules: [
      {
        test: /\.s?css$/, /*.css 끝나는 확장자를 찾는 명령어*/
        use: [
          'style-loader', /*설치 패키지 순서 바뀌면 안됨.*/
          'css-loader',   /*설치 패키지*/
          'postcss-loader', /*scss 해석된 내용을 postcss 해석함. */
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    })
  ]
}
const path = require("path"); //노드 모듈 중에 path를 가져와서 사용

module.exports = {
  mode: "development", //개발용이나 프로덕션용이냐
  entry: {
    main: "./src/app.js",
  },
  output: {
    //여러개의 모듈을 하나로 만들어서 저장시킬 위치를 설정
    path: path.resolve("./dist"),
    filename: "bundler.js",
  },
  module: {
    // css-loader를 설정
    rules: [
      {
        test: /\.css&/, //css에 대한 정규식입력
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jpg&/, //jpg에 대한 정규식입력
        use: ["file-loader"],
      },
    ],
  },
};

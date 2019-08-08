module.exports = {
    "presets": ["@babel/env", "@babel/react"],
    "plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties",["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // `style: true` 会加载 less 文件
    }]]
};
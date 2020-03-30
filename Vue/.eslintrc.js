module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:vue/essential", "standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    parser: "babel-eslint", // bebel-eslint允许使用实验性的特征
    ecmaVersion: 2018,
    sourceType: "module",
    "ecmaFeatures": {
        "globalReturn": false,
        "impliedStrict": false,
        "jsx": true
    }
  },
  plugins: ["vue"], // 解析vue文件
  rules: {
    "arrow-parens": 0, // 箭头函数使用圆括号
    indent: [
      "warn",
      4,
      {
        // 缩进：4个space；tab
        SwitchCase: 1, // switch中case的缩进
        VariableDeclarator: 1 // var声明的缩进级别
      }
    ],
    "linebreak-style": ["error", "windows"], // 换行方式：windows；unix
    quotes: ["error", "single"], // 引号
    semi: 0, // 分号
    "generator-star-spacing": 0, // Generator的*周围使用一样的空格
    // "no-debugger": process.env.NODE_ENV.indexOf("production") > -1 ? 2 : 0, // 不允许debugger

    "space-infix-ops": 1, // 要求操作符前后有空格
    eqeqeq: 1, // 强制使用全等
    "brace-style": 0, // 强制使用一样的大括号风格
    "space-before-function-paren": 0, // 函数参数前的空格
    "no-undef": 1, // 未定义变量
    "eol-last": 1, // 文件尾新行
    "no-unused-vars": 1, // 未使用变量
    "spaced-comment": 0, // 注释的空格
    "keyword-spacing": 0, // 关键字前后空格
    yoda: 0, // yoda风格
    "comma-dangle": 0, // 要求末尾逗号
    "no-trailing-spaces": 0, // 禁用行尾空格
    "prefer-promise-reject-errors": 0, // 要求reject时使用Error对象
    "no-multi-spaces": 0 // 进制使用多个空格
  }
};

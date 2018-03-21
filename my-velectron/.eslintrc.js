module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    //0:off,1:warn,2:error(default)
    'no-extra-parens': 1,//禁止非必要的括号
    'no-extra-semi': 0,//禁止多余的冒号
    'no-multi-spaces': 0,//不能用多余的空格
    'no-unused-vars':1,
    'no-trailing-spaces':0,
    'space-before-function-paren':0,
    'key-spacing':0,
    'semi':[1],
    'quotes':[0],
    'semi-spacing': [0, {"before": false, "after": true}],//分号前后空格
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'comma-spacing':0,
    // allow async-await
    'generator-star-spacing': 0,
    'indent':0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    
  

  }
}

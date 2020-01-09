module.exports = function (api) {
  api.cache(true)
  const presets = [
    ['@babel/env',{
      // 'useBuiltIns': 'usage',
      // 'corejs': 3,
      // 'modules': false,
      // 'targets': ['ie 8'],
    }]
  ]
  const plugins = [
    // '@babel/plugin-external-helpers',
    // '@babel/plugin-transform-runtime',
    // '@babel/plugin-external-helpers',
    // ['@babel/plugin-transform-runtime',{
    //   "absoluteRuntime": false,
    //   "corejs": 3,
    //   "helpers": true,
    //   "regenerator": true,
    //   "useESModules": false
    // }]
  ]
  return {
    presets,
    plugins
  }
}

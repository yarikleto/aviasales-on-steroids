module.exports = api => {
  api.cache.never()

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
  const plugins = [
    "@babel/plugin-proposal-optional-chaining",
    ["styled-jsx/babel", { sourceMaps: true }],
    "@babel/plugin-proposal-export-default-from"
  ]

  return {
    presets,
    plugins
  }
}

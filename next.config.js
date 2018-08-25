module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.css$/,
      use: 'raw-loader'
    })
    return config
  }
}

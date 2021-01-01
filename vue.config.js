module.exports = {
  publicPath: "newyear/2021",
  configureWebpack: {
    performance: {
      maxAssetSize: 270000,
      maxEntrypointSize: 700000,
    },
  },
};

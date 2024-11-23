
module.exports = {
  configureWebpack: {
    // ...existing code...
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(true)
      })
    ]
  }
};
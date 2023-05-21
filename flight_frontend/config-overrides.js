const { addBabelPlugins, override } = require("customize-cra");
module.exports = override(
  ...addBabelPlugins(
    "@babel/plugin-proposal-optional-chaining"
    /* Add plug-in names here (separate each value by a comma) */
  )
);
module.exports = function override(config, env) {
  console.log('override')
  let loaders = config.resolve
  loaders.fallback = {
    "fs": false,
    "tls": false,
    "net": false,
    "http": require.resolve("stream-http"),
    "https": false,
    "zlib": require.resolve("browserify-zlib"),
    "path": require.resolve("path-browserify"),
    "stream": require.resolve("stream-browserify"),
    "util": require.resolve("util/"),
    "crypto": require.resolve("crypto-browserify")
  }

  return config
}
module.exports = {
  // Other existing configuration options...

  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
};
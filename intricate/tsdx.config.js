const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true, // Enable CSS Modules
        extract: true, // Extract CSS into a separate file
        minimize: true, // Minify the CSS for production
      })
    );
    return config;
  },
};
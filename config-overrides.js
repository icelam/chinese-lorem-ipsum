const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, './src'),
    '@components': path.resolve(__dirname, './src/components'),
    '@containers': path.resolve(__dirname, './src/containers'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@styles': path.resolve(__dirname, './src/styles'),
    '@utils': path.resolve(__dirname, './src/utils'),
    '@data': path.resolve(__dirname, './src/data'),
    '@store': path.resolve(__dirname, './src/store')
  };

  return config; 
};
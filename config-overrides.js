const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@hooks': 'src/hooks',
    '@type': 'src/types',
    '@consts': 'src/consts',
    '@services': 'src/services'
  })(config);

  return config;
};
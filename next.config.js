const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const moment = require('moment');
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
  require.extensions['.less'] = file => {};
}

const getDateString = () => moment().format('YYYYMMDD');
const styleConfig = withCss(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  }
}));

const getConfig = () => process.env.NODE_ENV === 'production' ? {
  ...styleConfig,
  distDir: 'dist',
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return getDateString();
  }
} : styleConfig

module.exports = getConfig();

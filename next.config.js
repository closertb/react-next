const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
 
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
  require.extensions['.less'] = file => {};
}

module.exports = withCss(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  }
}));


// fix: prevents error when .css files are required by node
// if (typeof require !== 'undefined') {
//   require.extensions['.css'] = file => {}
// }
// module.exports = withCss();
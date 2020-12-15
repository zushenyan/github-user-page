module.exports = {
  plugins: [
    require('postcss-normalize'),
    // PostCSS version has to be greater than 8
    // require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    }),
  ],
};

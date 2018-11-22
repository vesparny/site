// https://github.com/pricelinelabs/design-system/blob/e0cdf16a084d7edeb8010852922f8569f48378d8/src/theme.js
// https://github.com/rebassjs/rebass/blob/891774b359965b8ce91a85b26dee61c7b1f89c29/src/theme.js
// https://varun.ca/styled-system/
export default {
  breakpoints: ['40em', '52em', '64em'],
  // @media screen and (min-width: 40em)
  // @media screen and (min-width: 52em)
  // @media screen and (min-width: 64em)

  // https://github.com/tachyons-css/tachyons/blob/4d798ba0528a8ec364efa4cc790437ad7f0c18c1/src/_type-scale.css
  fontSizes: [0.75, 0.875, 1, 1.25, 1.5, 2.25, 3, 5].map(n => n + 'rem'),

  fontWeights: {
    normal: 400,
    bold: 700
  },

  // https://github.com/tachyons-css/tachyons/blob/4d798ba0528a8ec364efa4cc790437ad7f0c18c1/src/_spacing.css
  space: [0, 0.25, 0.5, 1, 2, 4, 8, 16].map(n => n + 'rem'),

  // http://tachyons.io/docs/typography/font-family/
  fonts: {
    sans:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace'
  },

  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },

  // https://github.com/rebassjs/rebass/blob/891774b359965b8ce91a85b26dee61c7b1f89c29/src/colors.js
  // http://clrs.cc/a11y/
  // http://tachyons.io/docs/themes/skins/
  colors: {
    green: '#3ED3D8',
    orange: '#FF41B4',
    black: '#000',
    'near-black': '#1B1B1B',
    'mid-gray': '#555',
    silver: '#999',
    'moon-gray': '#ccc',
    'light-gray': '#eee',
    white: '#fff'
  }
}

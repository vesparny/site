const theme = require('./src/theme')

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'www',
    author: 'The www Team',
    description: 'A survival guide for crypto',
    siteUrl: 'https://www.net',
    keywords: ['bitcoin', 'trading', 'crypto', 'cryptocurrencies']
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: theme.colors.pink,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/writing`,
        name: 'writing'
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/page.js')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true
            }
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'www',
        short_name: 'www',
        start_url: '/',
        background_color: theme.colors.white,
        theme_color: theme.colors.green,
        display: 'standalone',
        icon: 'static/logo.svg'
      }
    },
    'gatsby-plugin-offline'
  ]
}

const groupBy = require('lodash.groupby')
const theme = require('./src/theme')

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Alessandro Arnodo',
    author: 'Alessandro Arnodo',
    description: 'Just another code monkey',
    siteUrl: 'https://arnodo.net',
    keywords: ['JavaScript']
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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              const { edges } = allMdx
              const allEdges = groupBy(edges, 'node.parent.sourceInstanceName')
              return allEdges.writing.map(edge => ({
                title: edge.node.frontmatter.title,
                date: edge.node.frontmatter.date,
                description: edge.node.excerpt,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug
              }))
            },
            query: `
              {
                allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
                  edges {
                    node {
                      id
                      excerpt(pruneLength: 250)
                      parent {
                        ... on File {
                          name
                          sourceInstanceName
                        }
                      }
                      frontmatter {
                        categories
                        title
                        date(formatString: "MMMM DD, YYYY, h:mm A")
                      }
                      fields {
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: 'Alessandro Arnodo Feed'
          }
        ]
      }
    },
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
    `gatsby-plugin-netlify`,
    'gatsby-plugin-offline'
  ]
}

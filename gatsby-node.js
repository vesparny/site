const path = require('path')
const groupBy = require('lodash.groupby')
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')

const PAGINATION_OFFSET = 2

const pluckCategories = edges =>
  Object.keys(
    edges.reduce((acc, value) => {
      value.node.frontmatter.categories.forEach(category => {
        if (!acc[category]) {
          acc[category] = category
        }
      })

      return acc
    }, {})
  )

const groupByCategory = edges =>
  edges.reduce((acc, value) => {
    value.node.frontmatter.categories.forEach(category => {
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(value)
    })
    return acc
  }, {})

const createCategoryPages = (createPage, edges) => {
  const categories = pluckCategories(edges)

  const posts = groupByCategory(edges)

  Object.keys(posts).forEach(category => {
    createPaginatedPages(
      createPage,
      posts[category],
      `/categories/${category}`,
      { categories, activeCategory: category }
    )
  })
}

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    createPage({
      path: node.fields.slug,
      component: componentWithMDXScope(
        path.resolve(`./src/templates/post.js`),
        node.code.scope,
        __dirname
      ),
      context: {
        id: node.id,
        prev,
        next
      }
    })
  })
}

const createRedirects = createRedirect => {
  ;[
    {
      fromPath: '/2015/01/16/morpheus-is-moving-forward',
      toPath: '/writing/2015/morpheus-is-moving-forward',
      isPermanent: true
    },
    {
      fromPath: '/2015/01/07/introducing-morpheus',
      toPath: '/writing/2015/introducing-morpheus',
      isPermanent: true
    }
  ].map(el => createRedirect(el))
}

const createWriting = (createPage, edges) => {
  const categories = pluckCategories(edges)

  createPaginatedPages(createPage, edges, '/writing', { categories })
}

const createPaginatedPages = (createPage, edges, pathPrefix, context) => {
  const pages = edges.reduce((acc, value, index) => {
    const pageIndex = Math.floor(index / PAGINATION_OFFSET)

    if (!acc[pageIndex]) {
      acc[pageIndex] = []
    }

    acc[pageIndex].push(value.node.id)

    return acc
  }, [])

  pages.forEach((page, index) => {
    const previousPagePath = `${pathPrefix}/${index + 1}`
    const nextPagePath = index === 1 ? pathPrefix : `${pathPrefix}/${index - 1}`

    createPage({
      path: index > 0 ? `${pathPrefix}/${index}` : `${pathPrefix}`,
      component: path.resolve(`src/templates/writing.js`),
      context: {
        pagination: {
          page,
          nextPagePath: index === 0 ? null : nextPagePath,
          previousPagePath:
            index === pages.length - 1 ? null : previousPagePath,
          pageCount: pages.length,
          pathPrefix
        },
        ...context
      }
    })
  })
}

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    query {
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
            }
            fields {
              slug
            }
            code {
              scope
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }
    const { edges } = data.allMdx
    const allEdges = groupBy(edges, 'node.parent.sourceInstanceName')

    createWriting(actions.createPage, allEdges.writing)
    createPosts(actions.createPage, allEdges.writing)
    createCategoryPages(actions.createPage, allEdges.writing)
    createRedirects(actions.createRedirect)
    return true
  })

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        $components: path.resolve(__dirname, 'src/components')
      }
    }
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    let slug = ''
    let type = ''
    if (parent.sourceInstanceName === 'writing') {
      // 2018-09-26-first-post/index.md
      slug = `/writing/${parent.relativePath
        .split('/')[0]
        .substring(0, 4)}/${parent.relativePath.split('/')[0].substring(11)}`
      type = 'post'
    }

    createNodeField({
      name: 'slug',
      node,
      value: slug
    })

    createNodeField({
      name: 'type',
      node,
      value: type
    })

    createNodeField({
      name: 'id',
      node,
      value: node.id
    })
  }
}

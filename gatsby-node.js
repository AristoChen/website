const path = require(`path`)
const { slugify } = require("./utils/slugify")
const { getGithubStats } = require("./utils/githubStats")
const { getScreenshot } = require("./utils/screenshot")

// generate slugs for our data
exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `TagsYaml`) {
    createNodeField({
      node,
      name: `slug`,
      value: `/tag/${slugify(node.tag)}`,
    })
  }

  if (node.internal.type === `ToolsYaml`) {
    createNodeField({
      node,
      name: `slug`,
      value: `/tool/${slugify(node.name)}`,
    })

    const stats = await getGithubStats(node.source)
    if (stats) {
      createNodeField({
        node,
        name: `githubStats`,
        value: stats,
      })
    }

    const screenshot = await getScreenshot(node.homepage)
    if (screenshot) {
      createNodeField({
        node,
        name: `screenshot`,
        value: screenshot,
      })
    }
  }
}

// generate pages for slugs
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tools = await graphql(`
    {
      allToolsYaml {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
  tools.data.allToolsYaml.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/tool.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  const tags = await graphql(`
    {
      allTagsYaml(sort: { fields: name, order: ASC }) {
        nodes {
          name
          tag
          fields {
            slug
          }
        }
      }
    }
  `)
  tags.data.allTagsYaml.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/tag.js`),
      context: {
        slug: node.fields.slug,
        tag: node.tag,
      },
    })
  })
}

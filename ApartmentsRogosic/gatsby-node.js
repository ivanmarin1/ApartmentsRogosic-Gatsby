const fs = require("fs-extra")
const path = require("path")
exports.onPostBuild = () => {
  console.log("Copying locales")
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/apartmentTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___title] }
        filter: { frontmatter: { category: { eq: "Apartments" } } }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 3000)
            frontmatter {
              title
              apartment
              category
              language
              path
            }
            html
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        apartment: "/" + node.frontmatter.apartment + "/",
        apartMD: node.frontmatter.apartment,
      }, // additional data can be passed via context
    })
  })
}

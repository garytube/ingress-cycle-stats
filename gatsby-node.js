const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const generateScores = data => {
  let scores = []
  data.forEach(entry => {
    const year = entry.year
    // points
    const resistancePoints = entry.cycles
      .map(({ cycle }) => cycle.res | 0)
      .reduce((total, score) => total + score)
    const enlightenedPoints = entry.cycles
      .map(({ cycle }) => cycle.enl | 0)
      .reduce((total, score) => total + score)
    // win streaks
    const resistanceWins = entry.cycles
      .map(({ cycle }) => cycle)
      .filter(score => score.res > score.enl).length
    const enlightenedWins = entry.cycles
      .map(({ cycle }) => cycle)
      .filter(score => score.res < score.enl).length
    // overall winner of entry
    const winner = resistanceWins > enlightenedWins ? "res" : "enl"
    scores.push({
      year,
      winner,
      resistancePoints,
      resistanceWins,
      enlightenedPoints,
      enlightenedWins,
    })
  })
  return scores
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query AllRemark {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const yearsQuery = await graphql(`
    {
      allMarkdownRemark {
        group(field: frontmatter___cycleYear) {
          year: fieldValue
          cycles: nodes {
            cycle: frontmatter {
              cycleYear
              cycle
              enl: enlightened
              res: resistance
            }
          }
        }
      }
    }
  `)

  const resultYears = yearsQuery.data.allMarkdownRemark.group
  createPage({
    path: "/",
    component: path.resolve(`src/templates/ScoreboardTemplate.js`),
    context: {
      years: resultYears.reverse(),
      scores: generateScores(resultYears),
    },
  })

  const cycleTemplate = path.resolve(`src/templates/cycleTemplate.js`)
  queryResults.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: cycleTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: "cycles/" })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type MarkdownRemark implements Node {
    frontmatter: Frontmatter
  }
  type Frontmatter{
    cell: String
    cycleYear: Int
    cycle: Int
    cycleDate: String
    resistance: Int
    enlightened: Int
  }
`
  createTypes(typeDefs)
}

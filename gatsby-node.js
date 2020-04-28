
const path = require(`path`)

const generateScores = (data) => {
  let scores = []
  data.forEach(entry => {
    const year = entry.year
    // points
    const resistancePoints = entry.cycles.map(({ cycle }) => cycle.res).reduce((total, score) => total + score)
    const enlightenedPoints = entry.cycles.map(({ cycle }) => cycle.enl).reduce((total, score) => total + score)
    // win streaks
    const resistanceWins = entry.cycles.map(({ cycle }) => cycle).filter(score => score.res > score.enl).length
    const enlightenedWins = entry.cycles.map(({ cycle }) => cycle).filter(score => score.res < score.enl).length
    // overall winner of entry
    const winner = resistanceWins > enlightenedWins ? "res" : "enl"
    scores.push({ year, winner, resistancePoints, resistanceWins, enlightenedPoints, enlightenedWins })
  });
  return scores
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
  query AllRemark{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            cycleDate
          }
        }
      }
    }
  }
  
  `);

  const yearsQuery = await graphql(`
  {
    allMarkdownRemark {
      group(field: frontmatter___cycleYear) {
        year: fieldValue
        cycles: nodes {
          cycle: frontmatter {
            cycleDate
            enl: enlightened
            res: resistance
          }
        }
      }
    }
  }
  `)

  const scores = generateScores(yearsQuery.data.allMarkdownRemark.group)
  createPage({
    path: '/',
    component: path.resolve(`src/templates/ScoreboardTemplate.js`),
    context: {
      scores
    }
  })

  const cycleTemplate = path.resolve(`src/templates/cycleTemplate.js`);
  queryResults.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/cycle/${node.frontmatter.cycleDate}`,
      component: cycleTemplate,
      context: {
        scores,
        cycleDate: `${node.frontmatter.cycleDate}`,
      }
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type MarkdownRemark implements Node @dontInfer{
    frontmatter: Frontmatter
  }
  type Frontmatter{
    cell: String
    cycleYear: Int!
    cycle: Int!
    cycleDate: String!
    resistance: Int!
    enlightened: Int! 
  }
`
  createTypes(typeDefs)
}
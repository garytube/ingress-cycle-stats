
const path = require(`path`)

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
  const cycleTemplate = path.resolve(`src/templates/cycleTemplate.js`);
  queryResults.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/cycle/${node.frontmatter.cycleDate}`,
      component: cycleTemplate,
      context: {
        cycleDate: `${node.frontmatter.cycleDate}`,
      }
    });
  });
};
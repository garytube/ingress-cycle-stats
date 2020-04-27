/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Ingress Cycle Stats`,
    slogan: `powered by besmurf.de Agents`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cycles`,
        path: `${__dirname}/src/cycles/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },

  ],
}

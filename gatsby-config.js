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
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ingress Cycle Stats",
        short_name: "Cycles",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#04eaf5",
        display: "standalone",
        icon: "src/images/maskable_icon.png",
      },
    },
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

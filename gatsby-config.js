module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Agilix`,
    description: 'Baza dla wszsystkich miłośników aktywnego spędzania czasu z psami',
    author: `Adam Gajzlerowwicz`,
    siteUrl: `https://agilix.dog`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
  ],
};

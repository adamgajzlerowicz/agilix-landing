module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Agilix`,
    description: 'Baza dla wszystkich miłośników aktywnego spędzania czasu z psami',
    author: `Adam Gajzlerowicz`,
    siteUrl: `https://agilix.dog`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        host: 'agilix.dog',
      },
    }
  ],
};

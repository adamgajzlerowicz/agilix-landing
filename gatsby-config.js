module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Agilix`,
    description: 'Baza dla wszsystkich miłośników aktywnego spędzania czasu z psami',
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-196721675-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        // head: false,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        // defer: false,
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        host: 'agilix.dog',
      },
    }
  ],
};

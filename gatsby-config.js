module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Agilix',
    description: 'Aplikacja dla Ciebie i Twojego najlepszego przyjaciela',
    titleTemplate: '%s | Agilix',
    author: 'Adam Gajzlerowicz',
    url: 'https://agilix.dog',
    image: '/image.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        host: 'agilix.dog',
      },
    },
  ],
}

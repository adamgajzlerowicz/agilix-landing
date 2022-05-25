const path = require('path')

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Agilix',
    description: 'Aplikacja dla Ciebie i Twojego najlepszego przyjaciela',
    titleTemplate: '%s | Agilix',
    author: 'Adam Gajzlerowicz',
    url: 'https://agilix.dog',
    image: '/image.png',
    facebookID: '1679997035493879',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets'),
      },
    },
    {
      resolve: 'gatsby-plugin-minify',
      options: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        minifyCSS: false,
        minifyJS: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        processConditionalComments: true,
      },
    },
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

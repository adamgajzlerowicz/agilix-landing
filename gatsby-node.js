const { slugs } = require('./src/news-slugs');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/sign|reset|coming/)) {
    page.context.layout = 'bare';
    createPage(page);
  }
};

exports.createPages = async function ({ actions }) {
  Object.values(slugs).forEach((slug) => {
    actions.createPage({
      path: '/aktualnosci/' + slug + '/',
      component: require.resolve('./src/pages/aktualnosci.js'),
      context: { slug: slug },
    });
  });
};

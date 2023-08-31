import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

export const Seo = ({ title }) => {
  const { pathname } = useLocation();
  const { site, logo } = useStaticQuery(query);

  const { title: defaultTitle, titleTemplate, description, url, facebookID } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description,
    image: `${url}${logo.childImageSharp.fixed.src}`,
    url: `${url}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {/*{(article ? true : null) && <meta property="og:type" content="article" />}*/}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta property="fb:app_id" content={facebookID} />
      <meta property="og:type" content="article" />
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        titleTemplate
        description
        url
        image
        facebookID
      }
    }
  }
`;

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

export const Seo = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  return null
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title: title
        titleTemplate
        description: description
        url: url
        image: image
        twitterUsername
      }
    }
  }
`

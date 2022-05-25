import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Content from '../sections/about/Content'
import Cta from '../sections/landing/Cta'
import Team from '../sections/about/Team'
import { Seo } from '../components/seo'
import { graphql } from 'gatsby'

const About = ({ data }) => (
  <PageWrapper>
    <Seo title="Nasza misja" />
    <Content image={data.mongo.childImageSharp.fixed.src} />
    <Team />
    <Cta />
  </PageWrapper>
)

export default About

export const query = graphql`
  query {
    mongo: file(relativePath: { eq: "mongo.jpg" }) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

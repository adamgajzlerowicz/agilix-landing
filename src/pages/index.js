import React from 'react'
import Hero from '../sections/landing/Hero'
import Feature from '../sections/landing/Feature'
import Content from '../sections/landing/Content'
import Cta from '../sections/landing/Cta'
import PageWrapper from '../components/PageWrapper'
import { Seo } from '../components/seo'
import { graphql } from 'gatsby'

const Index = ({ data }) => (
  <PageWrapper footerDark>
    <Seo title="Otwórz się na nowe aktywności ze swoim pieskiem" />
    <Hero image={data.shoot1.childImageSharp.fixed.src} />
    <Feature />
    <Content image={data.shoot2.childImageSharp.fixed.src} />
    <Cta />
  </PageWrapper>
)

export default Index

export const query = graphql`
  query {
    shoot1: file(relativePath: { eq: "shoot1.png" }) {
      childImageSharp {
        fixed(width: 752, pngQuality: 10) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    shoot2: file(relativePath: { eq: "shoot1.png" }) {
      childImageSharp {
        fixed(width: 451) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

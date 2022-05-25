import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Content from '../sections/about/Content'
import Cta from '../sections/landing/Cta'
import Team from '../sections/about/Team'
import { Helmet } from 'react-helmet'

const About = () => (
  <PageWrapper>
    <Helmet>
      <title>Nasza misja</title>
    </Helmet>
    <Content />
    <Team />
    <Cta />
  </PageWrapper>
)

export default About

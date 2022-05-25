import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Content from '../sections/about/Content'
import Cta from '../sections/landing/Cta'
import Team from '../sections/about/Team'
import { Seo } from '../components/seo'

const About = () => (
  <PageWrapper>
    <Seo title="Nasza misja" />
    <Content />
    <Team />
    <Cta />
  </PageWrapper>
)

export default About

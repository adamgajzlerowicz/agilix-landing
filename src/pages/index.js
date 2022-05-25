import React from 'react'
import Hero from '../sections/landing/Hero'
import Feature from '../sections/landing/Feature'
import Content from '../sections/landing/Content'
import Cta from '../sections/landing/Cta'
import PageWrapper from '../components/PageWrapper'
import { Seo } from '../components/seo'

const Index = () => (
  <PageWrapper footerDark>
    <Seo title="Otwórz się na nowe aktywności" />
    <Hero />
    <Feature />
    <Content />
    <Cta />
  </PageWrapper>
)

export default Index

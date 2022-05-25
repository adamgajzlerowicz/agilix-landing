import React from 'react';
import Hero from '../sections/landing/Hero';
import Feature from '../sections/landing/Feature';
import Content from '../sections/landing/Content';
import Cta from '../sections/landing/Cta';
import PageWrapper from '../components/PageWrapper';
import { Helmet } from 'react-helmet';

const Index = () => (
  <PageWrapper footerDark>
    <Helmet>
      <title>Otwórz się na nowe aktywności</title>
    </Helmet>
    <Hero />
    <Feature />
    <Content />
    <Cta />
  </PageWrapper>
);

export default Index;

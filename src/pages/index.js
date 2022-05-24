import React from "react";
import Hero from "../sections/landing/Hero";
import Feature from "../sections/landing/Feature";
import Content from "../sections/landing/Content";
import Cta from "../sections/landing/Cta";
import PageWrapper from "../components/PageWrapper";

const Index = () => {
  return (
      <PageWrapper footerDark>
        <Hero />
        <Feature />
        <Content />
        <Cta />
      </PageWrapper>
  );
};
export default Index;

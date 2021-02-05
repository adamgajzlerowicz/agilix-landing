import React from "react";
import Hero from "../sections/landing/Hero";
import Feature from "../sections/landing/Feature";
import Content from "../sections/landing/Content";
import CTA from "../sections/landing/CTA";
import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero />
        <Feature />
        <Content />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;

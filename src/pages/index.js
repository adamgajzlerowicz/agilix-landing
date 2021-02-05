import React from "react";
import Hero from "../sections/landing1/Hero";
import Feature from "../sections/landing1/Feature";
import Content from "../sections/landing1/Content";
import CTA from "../sections/landing1/CTA";
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

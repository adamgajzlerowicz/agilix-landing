import React from "react";
import Hero from "../sections/landing1/Hero";
import Feature from "../sections/landing1/Feature";
import Content1 from "../sections/landing1/Content1";
import Content2 from "../sections/landing1/Content2";
import Testimonial from "../sections/landing1/Testimonial";
import CTA from "../sections/landing1/CTA";
import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero />
        <Feature />
        <Content1 />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;

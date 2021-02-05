import React from "react";

import PageWrapper from "../components/PageWrapper";
import Content from "../sections/about/Content";
import CTA from "../sections/landing/CTA";
import Team from "../sections/about/Team";

const About = () => {
  return (
    <>
      <PageWrapper>
        <Content />
        <Team />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default About;

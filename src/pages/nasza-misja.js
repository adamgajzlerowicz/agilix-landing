import React from "react";

import PageWrapper from "../components/PageWrapper";
import Content from "../sections/about/Content";
import Cta from "../sections/landing/Cta";
import Team from "../sections/about/Team";

const About = () => {
  return (
    <>
      <PageWrapper>
        <Content />
        <Team />
        <Cta />
      </PageWrapper>
    </>
  );
};
export default About;

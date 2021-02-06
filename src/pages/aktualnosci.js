import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text } from "../components/Core";

import BlogList from "../sections/blog/BlogList";

const BlogRegular = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Title variant="hero">Aktualnosci</Title>
                <Text>
                    Nowości dotyczące aplikacji.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <BlogList />
      </PageWrapper>
    </>
  );
};
export default BlogRegular;

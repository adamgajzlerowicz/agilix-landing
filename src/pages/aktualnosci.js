import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text } from "../components/Core";

import BlogList from "../sections/blog/BlogList";

const BlogRegular = ({ pathContext }) => {
  const slug = pathContext.slug
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <Container>
            {!slug ? <Row className="justify-content-center text-center">
              <div className="pt-5"></div>
              <Col lg="8">
                <Title variant="hero">Aktualności</Title>
                <Text>
                    Nowości dotyczące aplikacji.
                </Text>
              </Col>
            </Row> :undefined }
          </Container>
        </Section>
        <BlogList slug={slug} />
      </PageWrapper >
    </>
  );
};
export default BlogRegular;

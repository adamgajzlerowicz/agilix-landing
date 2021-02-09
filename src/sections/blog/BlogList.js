import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../components/Core";
import PostCard from "../../components/PostCard";

const BlogList = () => (
  <>
    <Section className="position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="4" className="mb-5">
            <PostCard
              preTitle="6 Luty 2021"
              title="Powstała strona internetowa."
            >
                Pierwszy projekt strony internetowej jest już dostępny.
                <br />
              Będą tutaj sie powiawiać aktualności zwiazane z życiem aplikacji oraz nowo stworzone funkcjonalności.
            </PostCard>
          </Col>

        </Row>
        {/*<Box className="d-flex justify-content-center" mt={4}>*/}
        {/*  <Pagination>*/}
        {/*    <PageItem>*/}
        {/*      <FaAngleLeft />*/}
        {/*    </PageItem>*/}
        {/*    <PageItem>1</PageItem>*/}
        {/*    <PageItem>2</PageItem>*/}
        {/*    <PageItem>3</PageItem>*/}
        {/*    <PageItem>...</PageItem>*/}
        {/*    <PageItem>9</PageItem>*/}
        {/*    <PageItem>*/}
        {/*      <FaAngleRight />*/}
        {/*    </PageItem>*/}
        {/*  </Pagination>*/}
        {/*</Box>*/}
      </Container>
    </Section>
  </>
);

export default BlogList;

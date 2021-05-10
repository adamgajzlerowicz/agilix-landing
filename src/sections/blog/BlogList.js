import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import {Section} from "../../components/Core";
import PostCard from "../../components/PostCard";
import { news } from "../../aktualnosci";

const BlogList = ({ slug }) => {
    return (
        <>
            <Section className="position-relative">
                <Container>
                    {Object.entries(news).filter(([key]) => slug ? key === slug : true).map(([key, value]) => {
                        return <>
                            <Row className="align-items-center justify-content-center">
                                <Col xs="12" className="mb-5">
                                    <PostCard
                                        preTitle={value.date}
                                        title={value.title}
                                        titleLink={'/aktualnosci/' + key}
                                    >
                                        {value.content}
                                    </PostCard>
                                </Col>
                            </Row>
                        </>
                    })}
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
};

export default BlogList;

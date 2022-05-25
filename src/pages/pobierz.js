import React from "react";
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Section from "../components/Section";
import PageWrapper from "../components/PageWrapper";

import {Title, Text, Box } from "../components/Core";
import itunes from '../assets/image/svg/itunes.svg'
import play from '../assets/image/png/google-play.png'
import {Helmet} from "react-helmet";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const GetIt = () => {
    return (
            <PageWrapper footerDark>
                <Helmet>
                    <title>Pobierz</title>
                </Helmet>
                <Section py={[5, null, null, "190px"]} pb={50}>
                    <div className="text-center">
                        <Title mt={100}>
                            Trenuj razem z nami
                        </Title>


                        <Text mt={100}>
                            Zapisz się na zajęcia z posłuszeństwa, znajdź trenera Agility, <br/> Frisbee czy Flyball,
                            zapisz się na psie przedszkole, lub przyjdź na seminarium!
                        </Text>

                        <ButtonWrapper>
                            <Container style={{ maxWidth: 500}}>
                                <Box pt={50} pb={100}>
                                    <Row>
                                        <Col md={6} xs={12}>
                                            <Box mb={25} mr={10} ml={10}>
                                                    <a href='https://apps.apple.com/us/app/agilix/id1546768902'>
                                                        <img height={58} alt='pobierz z Google Play' src={itunes}/>
                                                    </a>
                                            </Box>
                                        </Col>
                                        <Col md={6} xs={12}>
                                            <Box mr={10} ml={10}>
                                                    <a href='https://play.google.com/store/apps/details?id=com.hackerman.agilix'>
                                                        <img height={57} alt='pobierz z Google Play' src={play}/>
                                                    </a>
                                            </Box>
                                        </Col>
                                    </Row>
                                </Box>
                            </Container>
                        </ButtonWrapper>

                    </div>
                </Section>

            </PageWrapper>
    );
};

export default GetIt;

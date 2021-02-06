import React from "react";
import styled from "styled-components";
import Section from "../components/Section";
import PageWrapper from "../components/PageWrapper";

import {Title, Text, Join, Box, Span} from "../components/Core";
import itunes from '../assets/image/svg/itunes.svg'
import play from '../assets/image/png/google-play.png'

const ContentIcon = styled.div`
  width: 118px;
  height: 118px;
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-evenly;
  align-items: center;
`

const GetIt = () => {
    return (
        <>
            <PageWrapper footerDark>
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
                                <Box pt={50} md={2} sm={1} pb={100}>
                                    <Join mb={25} mr={10} ml={10}>
                                        <Span>
                                            <a href='https://apps.apple.com/us/app/agilix/id1546768902'>
                                                <img height={58} alt='pobierz z Google Play' src={itunes}/>
                                            </a>
                                        </Span>
                                    </Join>
                                    <Join mr={10} ml={10}>
                                        <Span>
                                            <a href='https://play.google.com/store/apps/details?id=com.hackerman.agilix'>
                                                <img height={57} alt='pobierz z Google Play' src={play}/>
                                            </a>
                                        </Span>
                                    </Join>
                                </Box>
                        </ButtonWrapper>

                    </div>
                </Section>

            </PageWrapper>
        </>
    );
};

export default GetIt;

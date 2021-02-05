import React from "react";
import {Col, Container} from "react-bootstrap";
import styled from "styled-components";
import Section from "../components/Section";
import PageWrapper from "../components/PageWrapper";

import {Title, Text, Button, Box, Span} from "../components/Core";
import itunes from '../assets/image/svg/itunes.svg'
import play from '../assets/image/png/google-play.png'

const ContentIcon = styled.div`
  width: 118px;
  height: 118px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

const ButtonStyled = styled.button`
  min-width: 250px;
  min-height: 60px;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.66px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  box-shadow: none;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;
  transition: 0.4s;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    box-shadow: none;
    outline: none;
  }
`;

const GetIt = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section py={[5, null, null, "190px"]}>
            <div className="text-center" >
                <Title mt={100}>Przekonaj się jakie to proste</Title>

                <Text mt={100}>
                  Pobierz Agilix na swój telefon
                </Text>

                <Box pt={40} md={1} sm={2}>
                    <Span>
                        <a href='https://apps.apple.com/us/app/agilix/id1546768901'>
                          <img height={59} alt='pobierz z Google Play' src={itunes}/>
                        </a>
                    </Span>

                    <Span>
                        <a  href='https://play.google.com/store/apps/details?id=com.hackerman.agilix'>
                          <img height={57} alt='pobierz z Google Play' src={play}/>
                        </a>
                    </Span>
                </Box>

          </div>
        </Section>

      </PageWrapper>
    </>
  );
};

export default GetIt;

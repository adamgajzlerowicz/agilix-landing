import React from "react";
import { Link } from "gatsby";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Section from "../components/Section";
import PageWrapper from "../components/PageWrapper";

import imgIcon from "../assets/image/png/thumbs-shape.png";
import { Title, Text } from "../components/Core";
import itunes from '../assets/image/svg/itunes.svg'

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
        <Section>
          <div className="pt-5"></div>
          <Container>
            <div className="text-center">
              <div>
                <Title >Przekonaj się jakie to proste</Title>
                <a href='https://apps.apple.com/us/app/agilix/id1546768902'>
                  <img width={150} alt='pobierz z Google Play' src={itunes}/>
                </a>

                <a  href='https://play.google.com/store/apps/details?id=com.hackerman.agilix'>
                  <img width={200} alt='pobierz z Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/pl_badge_web_generic.png'/>
                </a>

                <Text>
                    Pobierz aplikację na swój telefon
                </Text>
              </div>
            </div>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};

export default GetIt;

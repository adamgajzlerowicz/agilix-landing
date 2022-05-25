import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Title, Button, Section, Box, Text } from '../../components/Core';

import { device } from '../../utils';
import svgHeroShape from '../../assets/image/svg/hero-shape-svg.svg';
import imgL1HeroPhone from '../../assets/image/png/shoot1.png';
import { Link } from 'gatsby';

const ShapeTopLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
`;

const TopCard = styled(Box)`
  width: 305px;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.shadow}`};
  position: absolute;
  top: 50%;
  left: 0;
  @media ${device.md} {
    left: -13%;
  }
  @media ${device.lg} {
    left: 65%;
  }
`;

const BottomCard = styled(Box)`
  width: 305px;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.shadow}`};
  position: absolute;
  bottom: 12%;
  right: 0;
  @media ${device.md} {
    right: -13%;
  }
  @media ${device.lg} {
    right: -5%;
  }
  @media ${device.xl} {
    right: -33%;
  }
`;

const ImgRight = styled.img`
  max-width: 50%;
  @media ${device.sm} {
    max-width: 60%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
`;

const Hero = () => (
    <Section className="position-relative">
      <div className="pt-5"></div>
      <ShapeTopLeft>
        <img src={svgHeroShape} alt="" className="img-fluid" />
      </ShapeTopLeft>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg="5" md="8" sm="9" className="order-lg-2">
            <div className="text-center text-lg-right position-relative">
              <div
                className="img-main"
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <ImgRight src={imgL1HeroPhone} alt="" />
              </div>

              <TopCard
                bg="secondary"
                p="18px"
                borderRadius={8}
                className="d-flex align-items-center"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="1000"
              >
                <Box
                  width="30px"
                  minWidth="30px"
                  height="30px"
                  minHeight="30px"
                  bg="warning"
                  color="light"
                  borderRadius="50%"
                  className="d-flex align-items-center justify-content-center"
                  mr={3}
                >
                  <i className="icon icon-check-2"></i>
                </Box>
                <Text color="light" fontSize={2} lineHeight="1.25">
                  Pomyślnie zalogowano!
                </Text>
              </TopCard>

              <BottomCard
                bg="warning"
                p="18px"
                borderRadius={8}
                className="d-flex align-items-center text-left"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="1000"
              >
                <Box
                  width="30px"
                  minWidth="30px"
                  height="30px"
                  minHeight="30px"
                  bg="secondary"
                  color="light"
                  borderRadius="50%"
                  className="d-flex align-items-center justify-content-center"
                  mr={3}
                >
                  <i className="icon icon-check-2"></i>
                </Box>
                <Text color="dark" fontSize={2} lineHeight="1.25">
                  Masz zaproszenie na zajęcia.
                </Text>
              </BottomCard>
            </div>
              </Col>
          <Col lg="7" className="order-lg-1">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                <Title variant="hero">
                  <article>
                    Aplikacja dla Ciebie i Twojego najlepszego przyjaciela
                  </article>
                </Title>
                <Text mb={4}>
                  Zapisz się na zajęcia z posłuszeństwa, znajdź trenera Agility,
                  Frisbee czy Flyball, zapisz się na psie przedszkole, lub
                  przyjdź na seminarium!
                </Text>
                <div className="d-flex flex-column align-items-start">
                  <Link to={'pobierz'}>
                    <Button mb={3}>Pobierz teraz</Button>
                  </Link>
                </div>
              </Box>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
);

export default Hero;

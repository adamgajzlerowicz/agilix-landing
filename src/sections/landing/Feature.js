import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import imgL1FeatureOval from "../../assets/image/png/l1-feature-oval.png";
import imgL1FeatureCurve from "../../assets/image/svg/l1-curve-feature.svg";

const ShapeTopRight = styled(Box)`
  position: absolute;
  top: 0;
  right: 0px;
`;

const ShapeBottmRight = styled(Box)`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  img {
    min-width: 100%;
  }
`;

const FeatureCard = ({
  color = "primary",
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box bg="light" py="25px" px="30px" borderRadius={10} mb={4} {...rest}>
    <Box
      size={69}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
    >
      <i className={`icon ${iconName}`}></i>
    </Box>
    <div>
      <Text
        color="heading"
        as="h3"
        fontSize={4}
        fontWeight={500}
        letterSpacing={-0.75}
        my={3}
      >
        {title}
      </Text>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
);

const Feature = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section bg="secondary" className="position-relative">
      <ShapeTopRight
        data-aos="fade-left"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <img src={imgL1FeatureOval} alt="" className="img-fluid" />
      </ShapeTopRight>
      <ShapeBottmRight>
        <img src={imgL1FeatureCurve} alt="" className="img-fluid" />
      </ShapeBottmRight>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="pl-lg-5 order-lg-2">
            <div className="feature-content section-title">
              <Title color="light">Otwórz się na nowe aktywności ze swoim pupilem!</Title>
              <Text color="light" opacity={0.7} mb={4}>
                  Jeżeli szukasz inspiracji na nowy rodzaj zajęć, chcesz poćwiczyc u kogoś innego lub po prostu
                  dużo podróżujesz i chcesz ćwiczyc w innym mieście, dzięki tej aplikacji rozwiniesz swoje skrzydła.
              </Text>

              <Button variant="outline">Pobierz teraz</Button>
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <Row>
              <Col md="6">
                <FeatureCard
                  color="primary"
                  iconName="icon-energy-2"
                  title="Dostęp do spersonalizowanej agendy"
                >
                  Trzymaj rospiskę wszystkich swoich zajęć w jednym miejscu.
                </FeatureCard>
              </Col>

              <Col md="6">
                <FeatureCard
                    color="ash"
                    iconName="icon-chat-round"
                    title="Zaproszenia do wydarzeń"
                >
                  Otrzymuj bezpośrednie zaproszenia do wydarzeń i treningów.
                </FeatureCard>
              </Col>

              <Col md="6">
                <FeatureCard
                    color="warning"
                    iconName="icon-trophy"
                    title="Niczego nie przegap"
                >
                  W przeddzień zajęć otrzymasz przypomnienie o zbliżającym się zdarzeniu bezpośrednio na swój telefon.
                </FeatureCard>
              </Col>

              <Col md="6">
                <FeatureCard
                  color="warning"
                  iconName="icon-camera-flash"
                  title="Eksploruj nowe możliwości"
                >
                  W aplikacji możesz znaleźć nowe kluby w swoim lub odległym mieście i przyłączyć sie do nich.
                </FeatureCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;

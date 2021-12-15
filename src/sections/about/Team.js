import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgU1 from "../../assets/image/jpeg/natalia.png";
import imgU2 from "../../assets/image/jpeg/adam.jpeg";
import agnieszka from "../../assets/image/jpeg/agnieszka.png";

const CardImage = styled.div`
  max-width: 160px;
  min-width: 160px;
  min-height: 160px;
  max-height: 160px;
  overflow: hidden;
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 29px;
`;

const TeamCard = ({ userImg, title, children, ...rest }) => (
  <Box
    className="text-center"
    pt="15px"
    px="30px"
    borderRadius={10}
    mb={4}
    {...rest}
  >
    <CardImage>
      <img src={userImg} className="img-fluid" alt="" />
    </CardImage>
    <div className="text-center">
      <Title variant="card" fontSize="24px" letterSpacing={-0.75} my={1}>
        {title}
      </Title>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
);

const Team = () => (
  <>
    <Section className="position-relative pt-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="text-center pb-3">
            <div className="">
              <Title>Kim jesteśmy</Title>
              <Text>
                  Jesteśmy miłośnikami zwierząt z misją!
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col sm="12" md="4">
            <TeamCard userImg={imgU2} title="Adam">
                Trener Agility, programista
            </TeamCard>
          </Col>
          <Col sm="12"  md="4" >
            <TeamCard userImg={imgU1} title="Natalia">
              Trenerka Agility, specjalista PR
            </TeamCard>
          </Col>
          <Col sm="12" md="4" >
            <TeamCard userImg={agnieszka} title="Agnieszka">
              Miłośniczka piesków i papużek, grafika i ilustracje
            </TeamCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Team;

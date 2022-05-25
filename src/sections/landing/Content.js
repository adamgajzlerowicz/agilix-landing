import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'gatsby-link'

import { Title, Button, Section, Box, Text } from '../../components/Core'
import { device } from '../../utils'

const ShapeCard = styled(Box)`
  width: 305px;
  box-shadow: 0 32px 34px rgba(28, 27, 32, 0.2);
  position: absolute;
  top: 70%;
  left: 0%;
  transform: scale(0.85);
  @media ${device.sm} {
    left: 0;
    transform: scale(1);
  }
  @media ${device.md} {
    left: 0%;
  }
`

const Content = ({ image }) => (
  <>
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col md="12" lg="6" className="order-lg-2">
            <div className="position-relative ps-lg-5">
              <div
                className="ps-lg-4 text-center text-lg-right"
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true">
                <img src={image} className="img-fluid" />
              </div>

              <ShapeCard
                bg="warning"
                p="18px"
                borderRadius={8}
                className="d-flex align-items-start"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500">
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
                  mt={2}>
                  <i className="fas fa-bell"></i>
                </Box>

                <Box pr="40px">
                  <Text fontSize={1} lineHeight="24px" opacity={0.7} mb={0}></Text>
                  <Title variant="card" fontWeight={300} mb={0}>
                    Zajęcia na dziś są dostępne
                  </Title>
                </Box>
              </ShapeCard>
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div data-aos="fade-right" data-aos-duration="750" data-aos-once="true">
              <Box>
                <Title>Jesteś trenerem?</Title>
                <Text mb={4}>
                  Załóż swój klub, zarządzaj jego członkami, akceptuj prośby o dołączenie, dodawaj
                  treningi indywidualne lub treningi dostępne dla każdego.
                </Text>
                <Link to={'pobierz'}>
                  <Button mt={3}>Pobierz teraz</Button>
                </Link>
              </Box>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default Content

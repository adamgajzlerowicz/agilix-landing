import React from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";

import {Box, Section, Text, Title} from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/easy-image-2-1.jpg";
import imgContent2 from "../../assets/image/jpeg/easy-image-2-2.jpg";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`;

const Content = () => (
  <>
    <Section>
      <Container>
        <div className="pt-5"></div>

        <Row className="justify-content-center pb-4">
          <Col lg="6">
            <Title variant="hero">Nasza misja</Title>
          </Col>
          <Col lg="6" className="pl-lg-5">
            <Text>
                Doskonale wiem jak trudno jest znaleźć osoby od której można nauczyć się poprawnej opieki nad psem.
                Po tym jak Mongo opuścił schronisko i przyłączył się do mojej rodziny, otrzymałem kontakt do behawiorysty
                który dał nam pierwsze wskazówki dotyczące zajmowania się nim. Kiedy współpraca zakończyła się, było mi bardzo trudno
                znaleźć miejsce gdzie moglibyśmy kontynuować naukę lub uczyć sie nowych rzeczy.
            </Text>

            <Text>
                Pomimo tego, że na przełomie ostatnich lat spotkaliśmy z Mongo wiele fantastycznych osób, którym wiele zadzięczam i
                które wiele nas nauczyły, nadal sprawia wyzwaanie umówienie sie na zajęcia
                do osoby u której ćwiczyłem wcześniej, nie wspominając o tym ile jest osób u których mógłbym ćwiczyć,
                a ktorych jeszcze nie poznałem.
            </Text>

              <Text>
              </Text>

              <Text>
                  Nasza misja polega na zwiększeniu przezroczystości rynku związanego z psimi zaktywnościami. Tak właśnie powstał Agilix.
                  Aplikacja na telefon, dzięki której można znaleźć trenerów i nowe typy zajęć.
                  Nie ważne, czy ma się psa przez całe swoje życie, czy tylko od wczoraj.
                  Każdy powinien mieć szansę na spędzanie czasu ze swoim pupilem.
              </Text>

          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" sm="5" className="mb-4 ">
            <ContentImg>
              <img src={imgContent1} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
          <Col lg="8" sm="7" className="mb-4">
            <ContentImg>
              <img src={imgContent2} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content;

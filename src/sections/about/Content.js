import React from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";

import {Box, Section, Text, Title} from "../../components/Core";

import Mongo from "../../assets/image/mongo.jpg";

const ContentImg = styled(Box)`
  box-shadow: ${({theme}) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  //max-height: 515px;
`;

const Content = () => (
    <>
        <Section>
            <Container>
                <div className="pt-5"></div>

                <Row className="justify-content-center pb-4">
                    <Col lg="12">
                        <Title variant="hero">Nasza misja</Title>
                    </Col>
                    <Col lg="6" className="ps-lg-5">
                        <Text>
                            Dnia 6 marca 2017 roku adoptowałem Mongo - półrocznego psiaka ze schroniska. Od razu
                            otrzymałem kontakt do behawiorysty,
                            dzięki któremu nauczyliśmy się podstawowych komend i posłuszeństwa. Po zakończeniu psiego
                            przedszkola chciałem
                            jednak dalej pracować z psem - Mongo się świetnie bawił, a ja zdałem sobie sprawę, że moja
                            aktywność z psem nie
                            musi się ograniczać do wyjścia na spacer. Znalezienie trenera okazało się czymś absurdalnie
                            trudnym - nie wiedziałem,
                            gdzie moglibyśmy kontynuować naukę lub spędzać aktywnie czas. Nawet kiedy udało mi się
                            zdobyć kontakt do jakiegoś trenera,
                            to często okazywało się, że nie jesteśmy na odpowiednim poziomie nauki albo po prostu nie ma
                            dostępnych terminów.
                            Pomimo tego, że ćwiczymy już od paru lat, umówienie się na zajęcia nawet z osobą, z którą
                            już ćwiczyliśmy jest wyzwaniem.
                            Aktywne spędzanie czasu z psem świetnie buduje relację pomiędzy opiekunem a zwierzakiem i
                            chciałbym aby każdy miał
                            taką możliwość. Agilix ma zwiększyć przezroczystość rynku związanego z psimi aktywnościami:
                            każdy może umówić się na
                            wybrane zajęcia a trenerzy są w stanie zarządzać swoimi wydarzeniami.
                        </Text>
                    </Col>

                    <Col lg="6">
                        <ContentImg>
                            <img src={Mongo} alt="mongo" className="img-fluid"/>
                        </ContentImg>
                    </Col>
                </Row>
            </Container>
        </Section>
    </>
);

export default Content;

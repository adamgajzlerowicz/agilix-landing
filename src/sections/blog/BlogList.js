import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import {Section} from "../../components/Core";
import PostCard from "../../components/PostCard";

const BlogList = () => (
    <>
        <Section className="position-relative">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col xs="12" className="mb-5">
                        <PostCard
                            preTitle="23 Kwiecień 2021"
                            title="Nowa wersja wydana - zawiera nową notyfikację!"
                        >
                            Upływający czas pozwolił na zbadanie jak aplikacja jest używana:
                            <hr/>
                                Od dziś dostępna jest nowa notyfikacja. Jeżeli wydarzenie zostanie odwłane - zostaniesz powiadomienie wprost na telefon.
                            <hr/>
                                Ekran do zapraszania na treningi został ulepszony. Sortowanie uczestników uwzględnia duże litery natomiast dodawanie
                                    uczestników nie powoduje przesortowania listy.
                            <hr />
                                Nowy ekran - jeżeli nie ma połączenia z internetem przy otwarciu aplikacji, wyskoczy komunikat proszący o ponowienie połączenia
                        </PostCard>
                    </Col>

                    <Col xs="12" className="mb-5">
                        <PostCard
                            preTitle="13 Luty 2021"
                            title="Formularz kontaktowy został ukończony"
                        >
                            Z upływem czasu strona jest rozwijana i dodawane są nowe funkcjojnalności.
                            <br/>
                            Od dziś, formularz kontaktowy jest w pełni sprawny.
                        </PostCard>
                    </Col>

                    <Col xs="12" className="mb-5">
                        <PostCard
                            preTitle="6 Luty 2021"
                            title="Powstała strona internetowa."
                        >
                            Pierwszy projekt strony internetowej jest już dostępny.
                            <br/>
                            Będą tutaj sie powiawiać aktualności zwiazane z życiem aplikacji oraz nowo stworzone
                            funkcjonalności.
                        </PostCard>
                    </Col>

                </Row>
                {/*<Box className="d-flex justify-content-center" mt={4}>*/}
                {/*  <Pagination>*/}
                {/*    <PageItem>*/}
                {/*      <FaAngleLeft />*/}
                {/*    </PageItem>*/}
                {/*    <PageItem>1</PageItem>*/}
                {/*    <PageItem>2</PageItem>*/}
                {/*    <PageItem>3</PageItem>*/}
                {/*    <PageItem>...</PageItem>*/}
                {/*    <PageItem>9</PageItem>*/}
                {/*    <PageItem>*/}
                {/*      <FaAngleRight />*/}
                {/*    </PageItem>*/}
                {/*  </Pagination>*/}
                {/*</Box>*/}
            </Container>
        </Section>
    </>
);

export default BlogList;

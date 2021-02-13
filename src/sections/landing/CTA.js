import React from "react";
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Formik} from 'formik';

import {
    Title,
    Button,
    Section,
    Box,
    Text,
    Input,
} from "../../components/Core";

import imgOval from "../../assets/image/png/l1-cta-oval.png";
import svgCurve from "../../assets/image/svg/l1-curve-cta.svg";
import {GraphQLClient, gql} from "graphql-request";
import {Loading} from "../../components/Loading";

const LeftCard = styled(Box)`
  position: absolute;
  top: 0;
  left: 0px;
`;

const RightCard = styled(Box)`
  position: absolute;
  top: 0;
  right: -275px;
`;

const graphQLClient = new GraphQLClient('https://agilix.hackerman-consulting.com/graphql', {});

const mutation = gql`
    mutation sendContactEmail(
        $content: String!
        $sender: String!
    ) {
        sendContactEmail(content: $content, sender:$sender)
    }
`


function CTA() {
    return (
        <>
            <Section bg="dark" className="position-relative">
                <LeftCard
                    data-aos="fade-right"
                    data-aos-duration="750"
                    data-aos-once="true"
                >
                    <img src={imgOval} alt="" className="img-fluid"/>
                </LeftCard>
                <RightCard>
                    <img src={svgCurve} alt="" className="img-fluid"/>
                </RightCard>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="7" xl="6">
                            <Formik
                                initialValues={{
                                    content: '',
                                    sender: ''
                                }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.sender) {
                                        errors.sender = 'Pole jest wymagane';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.sender)
                                    ) {
                                        errors.sender = 'Wpisz poprawny adres email';
                                    }

                                    if (!values.content) {
                                        errors.content = 'Pole jest wymagane';
                                    }

                                    return errors;
                                }}
                                onSubmit={(values, {setSubmitting, setStatus}) => {
                                    graphQLClient.request(mutation, values).then(result => {
                                        if (result.sendContactEmail) {
                                            setStatus('success')
                                        } else {
                                            setStatus('failed')
                                            console.log('wystapil blad');
                                        }
                                    }).catch(error => {
                                        setStatus('failed')
                                    }).finally(() => setSubmitting(false))
                                }}>
                                {({
                                      values,
                                      errors,
                                      touched,
                                      handleChange,
                                      handleBlur,
                                      handleSubmit,
                                      isSubmitting,
                                      status
                                  }) => {
                                    return (
                                        status === 'success' ?
                                            <Box mb={5} mt={5} className="text-center">
                                                <Text color="light">
                                                    Dziękujemy za kontakt!
                                                </Text>
                                                <Text color="light">
                                                    Wiadomość została wysłana.
                                                </Text></Box> :
                                            <form onSubmit={handleSubmit}>
                                                <Box mb={5} className="text-center">
                                                    <Title color="light">Napisz do nas</Title>
                                                    <Text color="light" opacity={0.7}>
                                                        Masz sugestie? Chcesz nawiazać wspłpracę? Brakuje
                                                        funkcjonalności?
                                                        Zapraszamy do
                                                        kontaktu!
                                                    </Text>
                                                </Box>
                                                <Box mb={3}>
                                                    <Input
                                                        type="text"
                                                        name='content'
                                                        placeholder="Wiadomość"
                                                        value={values.content}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.content && touched.content &&
                                                    <Text variant='small' color="warning">{errors.content}</Text>}
                                                </Box>
                                                <Box mb={3}>
                                                    <Input
                                                        type="text"
                                                        placeholder="Email"
                                                        name="sender"
                                                        value={values.sender}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.sender && touched.sender &&
                                                    <Text variant='small' color="warning">{errors.sender}</Text>}
                                                </Box>
                                                {isSubmitting === true &&
                                                <Box mb={5} mt={5} className="text-center"> <Loading/></Box>}

                                                {isSubmitting === false &&
                                                <Button
                                                    width="100%"
                                                    type="submit"
                                                    borderRadius={10}
                                                    disabled={isSubmitting}>
                                                    Wyślij wiadomość
                                                </Button>}
                                                {status === 'failed' &&
                                                <Text variant='small' color="warning" className="text-center">Wysyłanie nie powiodło się</Text>}

                                            </form>)
                                }}
                                    </Formik>

                                    </Col>
                                    </Row>
                                    </Container>
                                    </Section>
                                    </>
                                    );
                                };

export default CTA

import React from "react";
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";

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


const CTA = () => {
    const [formData, setFormData] = React.useState({
        content: '',
        sender: ''
    })

    const [loading, setLoading] = React.useState(null)

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

                            {loading === false ? <Box mb={5} mt={5} className="text-center"> <Text color="light" >
                                    Wiadomość została wysłana!
                                </Text></Box> :
                                <form>
                                    <Box mb={5} className="text-center">
                                        <Title color="light">Napisz do nas</Title>
                                        <Text color="light" opacity={0.7}>
                                            Masz sugestie? Chcesz nawiazać wspłpracę? Brakuje funkcjonalności?
                                            Zapraszamy do
                                            kontaktu!
                                        </Text>
                                    </Box>
                                    <Box mb={3}>
                                        <Input type="text" required placeholder="Wiadomość" value={formData.content}
                                               onChange={data => {
                                                   setFormData({...formData, content: data.target.value})
                                               }}/>
                                    </Box>
                                    <Box mb={3}>
                                        <Input type="email" required placeholder="Email" value={formData.sender}
                                               onChange={data => {
                                                   setFormData({...formData, sender: data.target.value})
                                               }}/>
                                    </Box>
                                    {loading === true && <Box mb={5} mt={5} className="text-center"> <Loading /></Box>}

                                    {loading === null &&
                                    <Button width="100%" type="submit" borderRadius={10} onClick={(e) => {
                                        e.preventDefault()

                                        if (formData.content && formData.sender) {
                                            setLoading(true)
                                            graphQLClient.request(mutation, formData).then(result => {
                                                if (result.sendContactEmail) {
                                                } else {
                                                    console.log('wystapil blad');
                                                }
                                                setLoading(false)
                                            }).catch(error => {
                                                setLoading(false)
                                                console.log('wystapil blad', error);
                                            })
                                        }
                                    }}
                                            disabled={typeof loading === 'boolean'}>
                                        {loading === null && 'Wyślij wiadomość'}
                                        {loading === true && <Loading/>}

                                    </Button>}
                                </form>
                            }
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    );
};

export default CTA;

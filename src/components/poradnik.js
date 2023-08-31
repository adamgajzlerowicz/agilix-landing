import React from 'react';

import PageWrapper from './PageWrapper';
import Cta from '../sections/landing/Cta';
import { Seo } from './seo';
import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { Section, Text, Title } from './Core';

const Poradnik = ({
  url = 'https://raw.githubusercontent.com/adamgajzlerowicz/agilix-landing/master/trener.md',
  title,
}) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const doGet = async () => {
      const response = await fetch(url);
      const text = await response.text();

      setData(text);
    };

    doGet();
  }, [url]);

  return (
    <PageWrapper>
      <Seo title={title} />

      <Section>
        <Container>
          <div className="pt-5"></div>

          <Row className="justify-content-center pb-4">
            <Col lg="12">
              <Title variant="hero">{title}</Title>
            </Col>
            <Col lg="12" className="ps-lg-5">
              {data ? (
                <ReactMarkdown
                  components={{
                    h1: () => null,
                    h3: ({ children }) => (
                      <Title mt={50} variant="card">
                        {children}
                      </Title>
                    ),
                    p: ({ children }) => <Text>{children}</Text>,
                    ul: ({ children }) => <Text>{children}</Text>,
                    li: ({ children }) => <Text pl={4}>- {children}</Text>,
                  }}
                  children={data}
                />
              ) : null}
            </Col>
          </Row>
        </Container>
      </Section>
      <Cta />
    </PageWrapper>
  );
};

export default Poradnik;

import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import {Box } from "../Core";
import Logo from "../Logo";
import {Link} from "gatsby";

const UlStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    line-height: 2.25;
    a {
      color: ${({ theme, color }) => theme.colors[color]} !important;
      &:hover {
        text-decoration: none;
        color: ${({ theme}) => theme.colors.secondary} !important;
      }
    }
  }
`;

const WhiteLogo = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 70px;
`;

const CopyRightArea = styled.div`
  border-top: ${({ dark, theme }) =>
    dark ? `1px solid #2f2f31 ` : `1px solid ${theme.colors.border}`};

  padding: 15px 0;
  p {
    color: ${({ dark, theme }) =>
      dark ? theme.colors.lightShade : theme.colors.darkShade};
    font-size: 13px;
    font-weight: 300;
    letter-spacing: -0.41px;
    line-height: 38px;
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    a {
      color: ${({ dark, theme }) =>
        dark ? theme.colors.light : theme.colors.dark} !important;
      font-size: 16px;
      transition: 0.4s;
      padding: 0 3px;
      margin: 0 2.5px;
      &:visited {
        text-decoration: none;
      }
      &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.secondary} !important;
      }
    }
  }
  
`;

const Footer = ({ isDark = true }) => {
  return (
    <>
      <Box bg={isDark ? "dark" : "light"}>
        <Container>
          <Box
            css={`
              padding: 80px 0 60px;
            `}
          >
            <Row className="justify-content-center">
              <Col lg="2" md="4">
                <WhiteLogo>
                  <Logo white={isDark} />
                </WhiteLogo>
              </Col>
              <Col lg="10" md="8" className="mt-5 mt-lg-0">
                <Row>
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <Link to="pobierz">
                            Pobierz aplikację
                          </Link>
                        </li>
                        <li>
                          <Link to="aktualnosci">
                            Aktualności
                          </Link>
                        </li>

                      </UlStyled>
                    </div>
                  </Col>
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <Link to="nasza-misja">
                            Nasza misja
                          </Link>
                        </li>
                        <li>
                          <Link to="polityka-prywatnosci">
                            Polityka prywatności
                          </Link>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Box>
          <CopyRightArea dark={isDark ? 1 : 0}>
            <Row className="align-items-center">
              <Col sm="6" className="text-sm-left text-center mb-2 mb-sm-0">
                <p>&copy; {new Date().getFullYear()} Adam Gajzlerowicz</p>
              </Col>
              <Col sm="6" className="text-sm-right text-center">
                <ul className="social-icons">
                  <li>
                    <a href="/#" target="_blank">
                      <i className="icon icon-logo-facebook"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </CopyRightArea>
        </Container>
      </Box>
    </>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faPinterestSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faRssSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";

function Footer() {
  return (
    <div style={{ backgroundColor: "#DDE0E3", width: "100%", padding: "40px" }}>
      <Container>
        <Row>
          <Col xs="4">
            <Row style={{ alignItems: "center" }}>
              <ul style={{display: "flex", justifyContent: "center", listStyleType: "none"}}>
                <li>
                  <a
                    href="https://www.facebook.com/kathrynhansen9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{color: "#393D3F"}}/>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.pinterest.com/kathryn_hansen8/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faPinterestSquare}
                      size="2x"
                      style={{ marginLeft: "5px", color: "#393D3F" }}
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/kathrynhansendrawings/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagramSquare}
                      size="2x"
                      style={{ marginLeft: "5px", color: "#393D3F" }}
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://artblogbykat.blogspot.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faRssSquare}
                      size="2x"
                      style={{ marginLeft: "5px", color: "#393D3F" }}
                    />
                  </a>
                </li>

                <li>
                  <a href="mailto:kh@kathrynhansen.com">
                    <FontAwesomeIcon
                      icon={faEnvelopeSquare}
                      size="2x"
                      style={{ marginLeft: "5px", color: "#393D3F" }}
                    />
                  </a>
                </li>
              </ul>
            </Row>
            <Row>
              <p style={{ textAlign: "center", fontWeight: "lighter" }}>kh@kathrynhansen.com</p>
            </Row>
          </Col>
          <Col xs="2"></Col>
          <Col>
            <Row style={{ fontWeight: "lighter" }}>
              <p style={{ textAlign: "center" }}>JOIN MY EMAIL LIST</p>
            </Row>
            <Row>
              <InputGroup>
                <Input placeholder="EMAIL" />
                <InputGroupAddon addonType="append">
                  <InputGroupText style={{ fontWeight: "lighter" }}>
                    SIGN UP
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

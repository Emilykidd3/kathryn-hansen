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
              <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
              <FontAwesomeIcon
                icon={faPinterestSquare}
                size="4x"
                style={{ marginLeft: "5px" }}
              />
              <FontAwesomeIcon
                icon={faInstagramSquare}
                size="4x"
                style={{ marginLeft: "5px" }}
              />
              <FontAwesomeIcon
                icon={faRssSquare}
                size="4x"
                style={{ marginLeft: "5px" }}
              />
              <FontAwesomeIcon
                icon={faEnvelopeSquare}
                size="4x"
                style={{ marginLeft: "5px" }}
              />
            </Row>
            <Row>
              <p style={{ textAlign: "center" }}>kh@kathrynhansen.com</p>
            </Row>
          </Col>
          <Col xs="2"></Col>
          <Col>
            <Row style={{ fontWeight: "lighter" }}>
              <p style={{textAlign: "center"}}>JOIN MY EMAIL LIST</p>
            </Row>
            <Row>
              <InputGroup>
                <Input placeholder="EMAIL"/>
                <InputGroupAddon addonType="append">
                  <InputGroupText  style={{fontWeight: "lighter"}}>SIGN UP</InputGroupText>
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

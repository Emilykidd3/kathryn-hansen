import React from 'react';
import { Container, Row, Col } from "reactstrap";
import test from '/../../public/images/the-fast-and-the-fuuurriest';

const Gallery = () => {
    return (
      <Container>
        <Row>
          <Col>
            <img alt={title} src={test} />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    );
}

export default Gallery;
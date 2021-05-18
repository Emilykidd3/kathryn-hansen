import React from "react";
import { EmptySpace } from "../components/EmptySpace";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

const AddEvent = () => {
  return (
    <div>
      <EmptySpace />
      <Container>
        <Row>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "200",
              marginBottom: "40px",
            }}
          >
            ADD AN EVENT
          </h2>
          <Col>
            <Form style={{ width: "80%", margin: "0 auto" }}>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="imageTitle">Artwork Title *</Label>
                <Input type="name" name="name" id="imageTitle" />
              </FormGroup>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="imageDescription">Artwork Description</Label>
                <Input
                  type="textarea"
                  name="imageDescription"
                  id="imageDescription"
                />
              </FormGroup>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="imageSize">Artwork Dimensions</Label>
                <Input
                  type="text"
                  name="imageSize"
                  id="imageSize"
                  placeholder="Ex: 12x20"
                />
              </FormGroup>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="imagePrice">Artwork Price</Label>
                <Input type="text" name="imagePrice" id="imagePrice" />
              </FormGroup>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="imageUpload"></Label>
                <Input type="file" name="imageUpload" id="imageUpload" />
              </FormGroup>
              <Button
                style={{
                  marginBottom: "8px",
                  color: "white",
                  backgroundColor: "#A66D60",
                  border: "solid 1px #A66D60",
                }}
              >
                Submit
              </Button>
              <p>* Required</p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddPhoto;

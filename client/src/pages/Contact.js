import React from "react";
import { EmptySpace } from "../components/EmptySpace";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { GrayDivider } from "../components/GrayDivider";
import { MobileEmptySpace } from "../components/MobileEmptySpace";

const phone = 415;

const Contact = () => {
  // handleSubmit( event ) {
  //   event.preventDefault();
  //   console.log(this.state);
  // }

  return phone >= window.innerWidth ? (
    <div>
      <MobileEmptySpace />
      <Container>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "200",
            marginBottom: "20px",
          }}
        >
          CONTACT
        </h2>
        <GrayDivider />
        <Row>
          <img
            src={`${process.env.PUBLIC_URL}/images/a-kodiak-moment.jpg`}
            alt="bear"
            style={{ width: "80%", margin: "auto auto 15px auto" }}
          ></img>
        </Row>
        <Row>
          <Col>
            <Form style={{ width: "80%", margin: "0 auto" }}>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="exampleEmail">Name *</Label>
                <Input
                  type="name"
                  name="name"
                  id="exampleName"
                  placeholder=""
                  // value={this.state.name}
                  // onChange={this.onNameChange.bind(this)}
                />
              </FormGroup>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="exampleEmail">Email *</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="examplePassword">Phone Number</Label>
                <Input
                  type="phoneNumber"
                  name="phoneNumber"
                  id="examplePhoneNumber"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="exampleText">Comment *</Label>
                <Input type="textarea" name="comment" id="exampleComment" />
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
  ) : (
    <div>
      <EmptySpace />
      <Container>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "200",
            marginBottom: "20px",
          }}
        >
          CONTACT
        </h2>
        <GrayDivider />
        <Row>
          <Col>
            <Form style={{ width: "80%", margin: "0 auto" }}>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="exampleEmail">Name *</Label>
                <Input
                  type="name"
                  name="name"
                  id="exampleName"
                  placeholder=""
                  // value={this.state.name}
                  // onChange={this.onNameChange.bind(this)}
                />
              </FormGroup>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="exampleEmail">Email *</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="examplePassword">Phone Number</Label>
                <Input
                  type="phoneNumber"
                  name="phoneNumber"
                  id="examplePhoneNumber"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="exampleText">Comment *</Label>
                <Input type="textarea" name="comment" id="exampleComment" />
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

          <Col>
            <img
              src={`${process.env.PUBLIC_URL}/images/a-kodiak-moment.jpg`}
              alt="bear"
              style={{ width: "80%" }}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );

  // onNameChange(event) {
  //   this.setState({name: event.target.value})
  // }

  // onEmailChange(event) {
  //   this.setState({email: event.target.value})
  // }

  // onMessageChange(event) {
  //   this.setState({message: event.target.value})
  // }

  // handleSubmit(event) {
  // }
};

export default Contact;

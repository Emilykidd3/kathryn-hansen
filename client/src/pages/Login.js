import React from "react";
import { EmptySpace } from "../components/EmptySpace";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// add validators so its a valid

const Login = () => {
  return (
    <div>
      <EmptySpace />
      <h2
        style={{
          textAlign: "center",
          fontWeight: "200",
          marginBottom: "40px",
        }}
      >
        ADMIN LOGIN
      </h2>
      <Form style={{ width: "40%", margin: "0 auto" }}>
        <FormGroup style={{ marginBottom: "8px" }}>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="" />
        </FormGroup>
        <FormGroup style={{ marginBottom: "8px" }}>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder=""
          />
        </FormGroup>
        <Button
          style={{
            marginBottom: "8px",
            color: "white",
            backgroundColor: "#A66D60",
            border: "solid 1px #A66D60",
          }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;

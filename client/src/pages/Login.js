import React, { useState } from "react";
import { EmptySpace } from "../components/EmptySpace";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
      <Form
        style={{ width: "40%", margin: "0 auto" }}
        onSubmit={handleFormSubmit}
      >
        <FormGroup style={{ marginBottom: "8px" }}>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder=""
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup style={{ marginBottom: "8px" }}>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="PWD"
            placeholder="******"
            onChange={handleChange}
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

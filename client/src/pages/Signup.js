import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { ADD_ADMIN } from "../utils/mutations";
import { EmptySpace } from "../components/EmptySpace";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addAdmin, { error }] = useMutation(ADD_ADMIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formState);

      const mutationResponse = await addAdmin({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      console.log(mutationResponse);
      const token = mutationResponse.data.addAdmin.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
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
        style={{ textAlign: "center", fontWeight: "200", marginBottom: "40px" }}
      >
        ADMIN SIGN UP
      </h2>

      <Link to="/login" style={{ margin: "10px" }}>
        ← Go to Login
      </Link>

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
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup;

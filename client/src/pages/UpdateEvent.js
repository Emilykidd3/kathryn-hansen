import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { EmptySpace } from "../components/EmptySpace";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { useMutation } from "@apollo/react-hooks";
import { UPDATE_EVENT } from "../utils/mutations";
import Auth from "../utils/auth";

const UpdateEvent = () => {
  const [formState, setFormState] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    link: "",
  });
  const [updateEvent, { error }] = useMutation(UPDATE_EVENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await updateEvent({
        variables: {
          _id: formState._id,
          title: formState.title,
          date: formState.date,
          startTime: formState.startTime,
          endTime: formState.endTime,
          address: formState.address,
          city: formState.city,
          state: formState.state,
          zip: formState.zip,
          link: formState.link,
        },
      });
      //   const token = mutationResponse.data.login.token;
      //   Auth.login(token);
      console.log(mutationResponse);
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

  function showUpdateEvent() {
    if (Auth.loggedIn()) {
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
            UPDATE EVENT
          </h2>

          <Form
            style={{ width: "40%", margin: "0 auto" }}
            onSubmit={handleFormSubmit}
          >
            <FormGroup style={{ marginBottom: "8px" }}>
              <Label for="exampleTitle">Title</Label>
              <Input
                type="title"
                name="title"
                id="exampleTitle"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: "8px" }}>
              <Label for="exampleDate">Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: "8px" }}>
              <Label for="exampleEndTime">Start Time</Label>
              <Input
                type="startTime"
                name="startTime"
                id="exampleStartTime"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: "8px" }}>
              <Label for="exampleEndTime">End Time</Label>
              <Input
                type="endTime"
                name="endTime"
                id="exampleEndTime"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: "8px" }}>
              <Label for="exampleAddress">Address</Label>
              <Input
                type="address"
                name="address"
                id="exampleAddress"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: "8px" }}>
              <Label for="exampleCity">City</Label>
              <Input
                type="city"
                name="city"
                id="exampleCity"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: "8px" }}>
              <Label for="exampleState">State</Label>
              <Input
                type="state"
                name="state"
                id="exampleState"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: "8px" }}>
              <Label for="exampleZip">Zip</Label>
              <Input
                type="zip"
                name="zip"
                id="exampleZip"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: "8px" }}>
              <Label for="exampleLink">Link</Label>
              <Input
                type="link"
                name="link"
                id="exampleLink"
                placeholder=""
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
    } else {
      return (
        <div>
          <EmptySpace />
          <div style={{ display: "flex" }}>
            <div style={{ margin: "0 auto" }}>
              <Button
                style={{
                  marginBottom: "8px",
                  color: "white",
                  backgroundColor: "#A66D60",
                  border: "solid 1px #A66D60",
                  margin: "0 auto",
                }}
              >
                <a
                  href="/login"
                  style={{
                    marginBottom: "8px",
                    color: "white",
                    backgroundColor: "#A66D60",
                    border: "solid 1px #A66D60",
                    textDecoration: "none",
                  }}
                >
                  Login
                </a>
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }

  return <div>{showUpdateEvent()}</div>;
};

export default UpdateEvent;

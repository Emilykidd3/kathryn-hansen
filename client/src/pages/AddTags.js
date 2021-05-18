import React, { useState } from "react";
import { EmptySpace } from "../components/EmptySpace";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { useMutation } from '@apollo/react-hooks';
import { ADD_TAGS } from "../utils/mutations"
import Auth from "../utils/auth";

const Tags = () => {
    const [formState, setFormState] = useState({ name: '' })
    const [addTag, { error }] = useMutation(ADD_TAGS);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            const mutationResponse = await addTag({ variables: { name: formState.name } })
            const token = mutationResponse.data.login.token;
            Auth.login(token);
            console.log(mutationResponse)
        } catch (e) {
            console.log(e)
        }
    };

    const handleChange = tag => {
        const { name, value } = tag.target;
        setFormState({
            ...formState,
            [name]: value
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
            ADD TAG
        </h2>

        <Form style={{ width: "80%", margin: "0 auto" }} onSubmit={handleFormSubmit}>
            <FormGroup style={{ marginBottom: "8px" }}>
                <Label for="exampleName">Name</Label>
                <Input type="name" name="name" id="exampleName" placeholder=""
                    onChange={handleChange} />
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


export default Tags;
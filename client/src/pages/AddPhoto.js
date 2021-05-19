// import React from "react";
// import { EmptySpace } from "../components/EmptySpace";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import { Container, Row, Col } from "reactstrap";
// import Auth from '../utils/auth';

// const AddPhoto = () => {
//   function showAddPhoto() {
//     if (Auth.loggedIn()) {
//       return(
//         <div>
//         <EmptySpace />
//         <Container>
//           <Row>
//             <h2
//               style={{
//                 textAlign: "center",
//                 fontWeight: "200",
//                 marginBottom: "40px",
//               }}
//             >
//               UPLOAD
//             </h2>
//             <Col>
//               <Form style={{ width: "60%", margin: "0 auto" }}>
//                 <FormGroup style={{ marginBottom: "8px" }}>
//                   <Label for="imageTitle">Artwork Title *</Label>
//                   <Input type="name" name="name" id="imageTitle" />
//                 </FormGroup>
//                 <FormGroup style={{ marginBottom: "8px" }}>
//                   <Label for="imageDescription">Artwork Description</Label>
//                   <Input
//                     type="textarea"
//                     name="imageDescription"
//                     id="imageDescription"
//                   />
//                 </FormGroup>
//                 <FormGroup style={{ marginBottom: "8px" }}>
//                   <Label for="imageSize">Artwork Dimensions</Label>
//                   <Input
//                     type="text"
//                     name="imageSize"
//                     id="imageSize"
//                     placeholder="Ex: 12x20"
//                   />
//                 </FormGroup>
//                 <FormGroup style={{ marginBottom: "8px" }}>
//                   <Label for="imagePrice">Artwork Price</Label>
//                   <Input type="text" name="imagePrice" id="imagePrice" />
//                 </FormGroup>
//                 <FormGroup style={{ marginBottom: "8px" }}>
//                   <Label for="imageUpload"></Label>
//                   <Input type="file" name="imageUpload" id="imageUpload" />
//                 </FormGroup>
//                 <Button
//                   style={{
//                     marginBottom: "8px",
//                     color: "white",
//                     backgroundColor: "#A66D60",
//                     border: "solid 1px #A66D60",
//                   }}
//                 >
//                   Submit
//                 </Button>
//                 <p>* Required</p>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       )
//     } else {
//       return (
//         <div>
//           <EmptySpace />
//           <div style={{ display: "flex" }}>
//             <div style={{ margin: "0 auto" }}>
//               <Button
//                 style={{
//                   marginBottom: "8px",
//                   color: "white",
//                   backgroundColor: "#A66D60",
//                   border: "solid 1px #A66D60",
//                   margin: "0 auto",
//                 }}
//               >
//                 <a
//                   href="/login"
//                   style={{
//                     marginBottom: "8px",
//                     color: "white",
//                     backgroundColor: "#A66D60",
//                     border: "solid 1px #A66D60",
//                     textDecoration: "none",
//                   }}
//                 >
//                   Login
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }

//   return (
//     <div>
//       {showAddPhoto()}
//     </div>
//   );
// };

// export default AddPhoto;

import React, { useState } from "react";
import { EmptySpace } from "../components/EmptySpace";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { ADD_GALLERY, TEST } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";



const AddPhoto = () => {
  const [formState, setFormState] = useState({
    image: "",
    title: "",
    description: "",
    size: "",
    price: "",
    availability: "",
    tag: "",
  });

  const [file, setFile] = useState();

  const [addGallery, { error }] = useMutation(TEST);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addGallery({
        variables: {
          input: {
            title: formState.title,
            description: formState.description,
            size: formState.size,
            price: formState.price,
            availability: formState.availability,
            tag: formState.tag,
          },
          image: file
        },
      });
      // const token = mutationResponse.data.login.token;
      // Auth.login(token);
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

  const handleImage = (event) => {
    console.log(event);
    const _file = event.target.files[0];
    console.log(_file);
    setFile(_file);
  }

  function showAddPhoto() {
    if (Auth.loggedIn()) {
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
                UPLOAD
              </h2>
              <Col>
                <Form
                  style={{ width: "60%", margin: "0 auto" }}
                  onSubmit={handleFormSubmit}
                >
                  <FormGroup style={{ marginBottom: "8px" }}>
                    <Label for="imageTitle">Artwork Title *</Label>
                    <Input
                      type="title"
                      name="title"
                      id="imageTitle"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: "8px" }}>
                    <Label for="imageDescription">Artwork Description</Label>
                    <Input
                      type="textarea"
                      name="imageDescription"
                      id="imageDescription"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  {/* do we want a dropdown here? */}
                  <FormGroup style={{ marginBottom: "8px" }}>
                    <Label for="imagePrice">Tags *</Label>
                    <Input
                      type="text"
                      name="tag"
                      id="tag"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: "8px" }}>
                    <Label for="imageSize">Artwork Dimensions</Label>
                    <Input
                      type="text"
                      name="imageSize"
                      id="imageSize"
                      placeholder="Ex: 12x20"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: "8px" }}>
                    <Label for="imagePrice">Artwork Price</Label>
                    <Input
                      type="text"
                      name="imagePrice"
                      id="imagePrice"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: "8px" }}>
                    <Label for="imageUpload"></Label>
                    <Input
                      type="file"
                      name="imageUpload"
                      id="imageUpload"
                      onChange={handleImage}
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
                  <p>* Required</p>
                </Form>
              </Col>
            </Row>
          </Container>
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
  return <div>{showAddPhoto()}</div>;
};
export default AddPhoto;

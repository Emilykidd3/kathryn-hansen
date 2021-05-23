import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
import { EmptySpace } from "../components/EmptySpace";
import { GrayDivider } from "../components/GrayDivider";
import { QUERY_ALL_GALLERY } from "../utils/queries";
import {MobileEmptySpace} from '../components/MobileEmptySpace';

const phone = 768

//map inside
const Gallery = () => {
  const { data, loading } = useQuery(QUERY_ALL_GALLERY);
  // const userData = data?.galleries || {};
  //map over galleries

  console.log(data);

  if (loading) {
    return (
      <div>
        <EmptySpace />
        <div>Loading...</div>
      </div>
    );
  }

  console.log(data);
  console.log(data.galleries[1]);

  return (
    phone >= window.innerWidth ? 
    <div>
      <MobileEmptySpace />
      <h2
        style={{
          textAlign: "center",
          fontWeight: "200",
          marginBottom: "40px",
        }}
      >
        GALLERY
      </h2>
      <GrayDivider />
      <Container>
        <Row>
          <CardGroup style={{ width: "90%", margin: "0 auto" }}>
            <Col xs="12">
            {data.galleries.length > 0
              ? data.galleries.map((el) => (
                    <Card key={el._id} style={{ marginLeft: "10px", marginRight: "10px", marginBottom: "10px" }}>
                      <CardImg
                        top
                        width="100%"
                        src={el.image}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                          {el.title}
                        </CardTitle>
                        <CardSubtitle
                          tag="h6"
                          className="mb-2 text-muted"
                          style={{ fontWeight: "lighter" }}
                        >
                          Colored Pencil on Paper
                        </CardSubtitle>
                        {/* if link is null, put contact artist */}
                        <a href={el.link} target="_blank">
                          <Button
                            style={{
                              backgroundColor: "#A66D60",
                              fontWeight: "lighter",
                            }}
                          >
                            Purchase Prints
                          </Button>
                        </a>
                      </CardBody>
                    </Card>
                ))
                : ""}
              </Col>
          </CardGroup>
        </Row>
      </Container>
    </div>
     :
    <div>
      <EmptySpace />
      <h2
        style={{
          textAlign: "center",
          fontWeight: "200",
          marginBottom: "40px",
        }}
      >
        GALLERY
      </h2>
      <GrayDivider />
      <Container>
        <Row>
          <CardGroup style={{ width: "90%", margin: "0 auto" }}>
            {data.galleries.length > 0
              ? data.galleries.map((el) => (
                  <Col xs="4" key={el._id}>
                    <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
                      <CardImg
                        top
                        width="100%"
                        src={el.image}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                          {el.title}
                        </CardTitle>
                        <CardSubtitle
                          tag="h6"
                          className="mb-2 text-muted"
                          style={{ fontWeight: "lighter" }}
                        >
                          Colored Pencil on Paper
                        </CardSubtitle>
                        {/* if link is null, put contact artist */}
                        <a href={el.link} target="_blank">
                          <Button
                            style={{
                              backgroundColor: "#A66D60",
                              fontWeight: "lighter",
                            }}
                          >
                            Purchase Prints
                          </Button>
                        </a>
                      </CardBody>
                    </Card>
                  </Col>
                ))
              : ""}
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;

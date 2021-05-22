import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  Container,
  Row,
} from "reactstrap";
import { EmptySpace } from "../components/EmptySpace";
import { GrayDivider } from "../components/GrayDivider";
import { QUERY_ALL_GALLERY } from "../utils/queries";

//map inside
const Gallery = () => {
  const { data, loading } = useQuery(QUERY_ALL_GALLERY);
  const userData = data?.galleries || {};
  //map over galleries

  if (loading) return <div>Loading...</div>;
  console.log(data);

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
        GALLERY
      </h2>
      <GrayDivider />
      <Container>
        <Row>
          <CardGroup style={{ width: "90%", margin: "0 auto" }}>
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src="https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185395/kathryn-hansen/bearly-awake_baddgu.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                  Bearly Awake
                </CardTitle>
                <CardSubtitle
                  tag="h6"
                  className="mb-2 text-muted"
                  style={{ fontWeight: "lighter" }}
                >
                  Colored Pencil on Paper
                </CardSubtitle>
                <a
                  href="https://fineartamerica.com/featured/bearly-awake-kathryn-hansen.html"
                  target="_blank"
                >
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
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;

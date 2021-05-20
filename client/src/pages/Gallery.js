import React from "react";
// import { useQuery } from "@apollo/react-hooks";
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
// import { QUERY_ALL_GALLERY } from "../utils/queries";

//map inside
const Gallery = () => {
  // const { data, loading } = useQuery(QUERY_ALL_GALLERY);
  // const userData = data?.events || {};
  //map over galleries

  // if (loading) return <div>Loading...</div>;

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
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src="https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185398/kathryn-hansen/owl-by-myself_o4csiv.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                  Owl By Myself
                </CardTitle>
                <CardSubtitle
                  tag="h6"
                  className="mb-2 text-muted"
                  style={{ fontWeight: "lighter" }}
                >
                  Colored Pencil on Paper
                </CardSubtitle>
                <a
                  href="https://fineartamerica.com/featured/owl-by-myself-kathryn-hansen.html"
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

            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src="https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185398/kathryn-hansen/tell-tail-sign_yoa9m2.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                  Tell Tail Sign
                </CardTitle>
                <CardSubtitle
                  tag="h6"
                  className="mb-2 text-muted"
                  style={{ fontWeight: "lighter" }}
                >
                  Colored Pencil on Paper
                </CardSubtitle>
                <a
                  href="https://fineartamerica.com/featured/tell-tail-sign-kathryn-hansen.html"
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
        <Row style={{ marginTop: "10px" }}>
          <CardGroup style={{ width: "80%", margin: "0 auto" }}>
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src="https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185394/kathryn-hansen/im-all-ears_n9vqip.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                  I'm All Ears
                </CardTitle>
                <CardSubtitle
                  tag="h6"
                  className="mb-2 text-muted"
                  style={{ fontWeight: "lighter" }}
                >
                  Colored Pencil on Paper
                </CardSubtitle>
                <a
                  href="https://fineartamerica.com/featured/im-all-ears-kathryn-hansen.html"
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
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src="https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185398/kathryn-hansen/up-at-the-quack-of-dawn_az0hws.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                  Up At The Quack of Dawn
                </CardTitle>
                <CardSubtitle
                  tag="h6"
                  className="mb-2 text-muted"
                  style={{ fontWeight: "lighter" }}
                >
                  Colored Pencil on Paper Original <br />
                  Artwork: $2,300
                </CardSubtitle>
                <Button
                  style={{ backgroundColor: "#A66D60", fontWeight: "lighter" }}
                >
                  Contact Artist
                </Button>
              </CardBody>
            </Card>
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src="https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185397/kathryn-hansen/let-it-bee_ncy1il.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                  Let It Bee
                </CardTitle>
                <CardSubtitle
                  tag="h6"
                  className="mb-2 text-muted"
                  style={{ fontWeight: "lighter" }}
                >
                  Colored Pencil on Paper
                </CardSubtitle>
                <a
                  href="https://fineartamerica.com/featured/let-it-bee-kathryn-hansen.html"
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
        <Row style={{ marginTop: "10px" }}>
          <CardGroup style={{ width: "80%", margin: "0 auto" }}>
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src="https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185395/kathryn-hansen/cadbury_ahhz8v.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                  Cadbury
                </CardTitle>
                <CardSubtitle
                  tag="h6"
                  className="mb-2 text-muted"
                  style={{ fontWeight: "lighter" }}
                >
                  Colored Pencil on Paper
                </CardSubtitle>
                <a
                // href="https://fineartamerica.com/featured/winging-it-kathryn-hansen.html"
                // target="_blank"
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
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src="https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185395/kathryn-hansen/a-kodiak-moment_mqjiej.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                  A Kodiak Moment
                </CardTitle>
                <CardSubtitle
                  tag="h6"
                  className="mb-2 text-muted"
                  style={{ fontWeight: "lighter" }}
                >
                  Colored Pencil on Paper
                </CardSubtitle>
                <a
                  href="https://fineartamerica.com/featured/a-kodiak-moment-kathryn-hansen.html"
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

            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src="https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185399/kathryn-hansen/winging-it_xjasud.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                  Winging It
                </CardTitle>
                <CardSubtitle
                  tag="h6"
                  className="mb-2 text-muted"
                  style={{ fontWeight: "lighter" }}
                >
                  Colored Pencil on Paper
                </CardSubtitle>
                <a
                  href="https://fineartamerica.com/featured/winging-it-kathryn-hansen.html"
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
        <Row style={{ marginTop: "10px" }}>
          <CardGroup style={{ width: "80%", margin: "0 auto" }}>
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src="https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185395/kathryn-hansen/hiding-in-plain-sight_wwqcgl.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                  Hiding in Plain Sight
                </CardTitle>
                <CardSubtitle
                  tag="h6"
                  className="mb-2 text-muted"
                  style={{ fontWeight: "lighter" }}
                >
                  Colored Pencil on Paper
                </CardSubtitle>
                <a
                  href="https://fineartamerica.com/featured/hiding-in-plain-sight-kathryn-hansen.html"
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
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src="https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185397/kathryn-hansen/gone-fishin_mhime1.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                  Gone Fishing
                </CardTitle>
                <CardSubtitle
                  tag="h6"
                  className="mb-2 text-muted"
                  style={{ fontWeight: "lighter" }}
                >
                  Colored Pencil on Paper
                </CardSubtitle>
                <a
                // href="https://fineartamerica.com/featured/hiding-in-plain-sight-kathryn-hansen.html"
                // target="_blank"
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
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src="https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185395/kathryn-hansen/a-pairoof-swimming-trunks_vks3oi.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ fontWeight: "lighter" }}>
                  A Pair of Swimming Trunks
                </CardTitle>
                <CardSubtitle
                  tag="h6"
                  className="mb-2 text-muted"
                  style={{ fontWeight: "lighter" }}
                >
                  Colored Pencil on Paper
                </CardSubtitle>
                <a
                  href="https://annkullberg.com/products/elephant-in-depth-colored-pencil-tutorial"
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

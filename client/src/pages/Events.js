import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ALL_EVENTS } from "../utils/queries";
import { EmptySpace } from "../components/EmptySpace";
import { Container, Row, Col, Button } from "reactstrap";
import dateFormat from "../utils/dateFormat";
import { Divider } from "../components/Divider";
import Moment from "moment";

const Events = () => {
  const { data, loading } = useQuery(QUERY_ALL_EVENTS);

  const userData = data?.events || {};

  if (loading) return <div>Loading...</div>;

  //   if (error) console.error(error);

  console.log(data.events);

  const formattedDate = Moment(data.events.date).format("MM/DD/YY");

  return (
    <div>
      <EmptySpace />
      <h2
        style={{ textAlign: "center", fontWeight: "200", marginBottom: "60px" }}
      >
        UPCOMING EVENTS
      </h2>
      {data.events.length > 0
        ? data.events.map((el) => (
            <Container style={{ width: "60%" }}>
              <Row>
                <Col>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/cadbury.jpg`}
                    alt="bunny"
                    style={{ width: "80%" }}
                  ></img>
                </Col>
                <Row>
                  <Col xs="3">
                    <Row>
                      <h5 sstyle={{ fontWeight: "lighter" }}>
                        {formattedDate}
                      </h5>
                    </Row>
                    <Row>
                      <p style={{ color: "#393D3F" }}>
                        {el.startTime}-{el.endTime}
                      </p>
                    </Row>
                  </Col>
                  <Col xs="6">
                    <Row>
                      <h4 key={el._id}>{el.title}</h4>
                    </Row>
                    <Row>
                      <p style={{ color: "#393D3F" }}>
                        {el.address}
                        <br />
                        {el.city},&nbsp;
                        {el.state}&nbsp;
                        {el.zip}
                      </p>
                    </Row>
                  </Col>
                  <Col xs="3" style={{ display: "flex" }}>
                    <Button
                      style={{
                        marginBottom: "8px",
                        color: "white",
                        backgroundColor: "#A66D60",
                        border: "solid 1px #A66D60",
                        margin: "auto auto",
                      }}
                    >
                      <a
                        href={el.link}
                        style={{
                          marginBottom: "8px",
                          color: "white",
                          backgroundColor: "#A66D60",
                          border: "solid 1px #A66D60",
                          textDecoration: "none",
                        }}
                      >
                        Learn More
                      </a>
                    </Button>
                  </Col>
                  <Divider
                    style={{ borderBottom: "solid 1px #A66D60", width: "100%" }}
                  />
                </Row>
              </Row>
            </Container>
          ))
        : ""}
    </div>
  );
};

export default Events;

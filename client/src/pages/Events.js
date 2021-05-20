import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { QUERY_ALL_EVENTS } from "../utils/queries";
import { DELETE_EVENT } from "../utils/mutations";
import { EmptySpace } from "../components/EmptySpace";
import { Container, Row, Col, Button } from "reactstrap";
import { Divider } from "../components/Divider";
import { Link } from "react-router-dom";
import { GrayDivider } from '../components/GrayDivider';
import moment from 'moment'

import Auth from "../utils/auth";

moment().format();

const Events = () => {
  const [removeEvent, { error }] = useMutation(DELETE_EVENT);
  const { data, loading } = useQuery(QUERY_ALL_EVENTS);

  const userData = data?.events || {};

  if (loading) return <div>Loading...</div>;

  console.log(data)

  const formattedDate = moment(data).format("MM/DD/YY");

  const handleDeleteEvent = async (eventId) => {
    try {
      const { data } = await removeEvent({
        variables: { _id: eventId },
      });

      // removeEventId(eventId);
    } catch (err) {
      console.error(err);
    }
  };

  function showEvent() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <EmptySpace />
          <h2 style={{ textAlign: "center", fontWeight: "200", marginBottom: "20px" }}>UPCOMING EVENTS</h2>
          <GrayDivider />
          {data.events.length > 0
            ? data.events.map((el) => (
                <Container style={{ width: "60%" }} key={el._id}>
                  <Row>
                    <Col xs="3">
                      <Row>
                        <h5 sstyle={{ fontWeight: "lighter" }}>{formattedDate}</h5>
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
                      <Link to="/updateevents">
                        {" "}
                        <Button
                          style={{
                            marginBottom: "8px",
                            color: "white",
                            backgroundColor: "#A66D60",
                            border: "solid 1px #A66D60",
                            margin: "auto auto",
                          }}
                        >
                          Update Event
                        </Button>
                      </Link>
                      <Button
                        style={{
                          marginBottom: "8px",
                          color: "white",
                          backgroundColor: "#A66D60",
                          border: "solid 1px #A66D60",
                          margin: "auto auto",
                        }}
                        onClick={() => handleDeleteEvent(el._id)}
                      >
                        Delete Event
                      </Button>
                    </Col>
                    <Divider
                      style={{
                        borderBottom: "solid 1px #A66D60",
                        width: "100%",
                      }}
                    />
                  </Row>
                </Container>
              ))
            : ""}
        </div>
      );
    } else {
        return(
      <div>
        <EmptySpace />
        <h2 style={{ textAlign: "center", fontWeight: "200", marginBottom: "20px" }}>UPCOMING EVENTS</h2>
        <GrayDivider />
        {data.events.length > 0
          ? data.events.map((el) => (
              <Container style={{ width: "60%" }}>
                <Row>
                  <Col xs="3">
                    <Row>
                      <h5 sstyle={{ fontWeight: "lighter" }}>{el.date}</h5>
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
                    style={{
                      borderBottom: "solid 1px #A66D60",
                      width: "100%",
                    }}
                  />
                </Row>
              </Container>
            ))
          : ""}
      </div>
        )
    }
  }
  return <div>{showEvent()}</div>;
};
export default Events;

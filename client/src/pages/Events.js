import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { QUERY_ALL_EVENTS } from "../utils/queries";
import { DELETE_EVENT } from "../utils/mutations";
import { EmptySpace } from "../components/EmptySpace";
import { Container, Row, Col, Button } from "reactstrap";
import dateFormat from "../utils/dateFormat";
import { Divider } from "../components/Divider";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

// const updateEventInfo = async () => {
//   // 
//     try {
//       const { data } = await oneevent({
//         variables: { _id: eventId },
//       });

//       return 

//     } catch (err) {
//       console.error(err);
//     }
//   };

const Events = () => {
  const [removeEvent, { error }] = useMutation(DELETE_EVENT, {
    update(cache, { data: { removeEvent } }) {
      try {
     
        // could potentially not exist yet, so wrap in a try...catch
        const { events } = cache.readQuery({ query: QUERY_ALL_EVENTS });
        cache.readQuery({
          query: QUERY_ALL_EVENTS,
          data: { events: [removeEvent, ...events] }
        });
      } catch (e) {
        console.error(e);
      }
    }
    });

  let history = useHistory();
  const { data, loading } = useQuery(QUERY_ALL_EVENTS);

  // const userData = data?.events || {};

  if (loading) return <div>Loading...</div>;

  const handleDeleteEvent = async (eventId) => {
    try {
      const { mutationResponse } = await removeEvent({
        variables: { _id: eventId },
      });

     
      // removeEventId(eventId);
      console.log(mutationResponse);
      if (mutationResponse) {
        history.push("/events");
      }
    } catch (e) {
      console.log(e);
    }
  };

  function showEvent() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <EmptySpace />
          {data.events.length > 0
            ? data.events.map((el) => (
                <Container style={{ width: "60%" }} key={el._id}>
                  <Row>
                    <Col xs="3">
                      <Row>
                        <h5 style={{ fontWeight: "lighter" }}>{el.date}</h5>
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
      <div>
        <EmptySpace />
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
      </div>;
    }
  }
  return <div>{showEvent()}</div>;
};

// export default { Events, updateEventInfo };
export default Events

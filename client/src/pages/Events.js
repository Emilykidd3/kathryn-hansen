import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { QUERY_ALL_EVENTS, QUERY_EVENT } from "../utils/queries";
import { DELETE_EVENT } from "../utils/mutations";
import { EmptySpace } from "../components/EmptySpace";
import { Container, Row, Col, Button } from "reactstrap";
import { Divider } from "../components/Divider";
import { Link } from "react-router-dom";
import { GrayDivider } from "../components/GrayDivider";
import moment from "moment";
import Auth from "../utils/auth";

moment().format();

const phone = 415;

const Events = () => {
  const [removeEvent, { error }] = useMutation(DELETE_EVENT);
  //QUERY ALL EVENTS TO DISPLAY THEM ON PAGE
  const { data, loading } = useQuery(QUERY_ALL_EVENTS);

  // const myEvent = useQuery(QUERY_EVENT);

  // const userData = data?.events || {};

  if (loading) return <div>Loading...</div>;

  const formattedDate = moment(data.events.date).format("MM/DD/YY");

  const handleDeleteEvent = async (eventId) => {
    try {
      const [deleteData, { error }] = await removeEvent({
        variables: { _id: eventId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateEvent = async (eventID) => {
    // const myArray = [eventID];
    // try {
    //   const [updateData, { error }] = await myEvent({
    //     variables: { _id: myArray },
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
    // console.log(myArray);
    // console.log(myEvent);
  };

  // const handleUpdateEvent = async (tunafishsalad) => {
  //   //DELETE EVENT THAT IS CLICKED ON NEAR LN 128 VIA HANDLE DELETE EVENT AND REMOVE EVENT CONST AND MUTATION DELETE_EVENT
  //   const [selectAndStoreEventToBeUpdated, { error }] = useQuery(QUERY_EVENTS);
  //   try {
  //     const { data } = await selectAndStoreEventToBeUpdated({
  //       variables: { _id: tunafishsalad },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   console.log(selectAndStoreEventToBeUpdated);
  //   console.log(data);
  // };

  function showEvent() {
    if (Auth.loggedIn()) {
      return (
        phone >= window.innerWidth ?
        <div>
          <EmptySpace />
          <h2
            style={{
              textAlign: "center",
              fontWeight: "200",
              marginBottom: "20px",
            }}
          >
            UPCOMING EVENTS
          </h2>
          <GrayDivider />
          {data.events.length >= 1
            ? data.events.map((el) => (
                <Container key={el._id} style={{ width: "60%" }}>
                  <Row>

                      <Row>
                        <h4 style={{textAlign: "center"}}>{el.title}</h4>
                      </Row>
                      <Row>
                        <p style={{ color: "#393D3F", textAlign: "center" }}>
                          {el.address}
                          <br />
                          {el.city},&nbsp;
                          {el.state}&nbsp;
                          {el.zip}
                        </p>
                      </Row>
                      <Row>
                        <h5 style={{ fontWeight: "light", textAlign: "center" }}>{formattedDate}</h5>
                      </Row>
                      <Row>
                        <p style={{ color: "#393D3F", textAlign: "center" }}>
                          {el.startTime}-{el.endTime}
                        </p>
                      </Row>
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
                    <Divider
                      style={{
                        borderBottom: "solid 1px #A66D60",
                        width: "100%",
                      }}
                    />
                  </Row>
                </Container>
              ))
            : <p style={{textAlign: "center"}}>No upcoming events, check back soon!</p>}
        </div>
        :
        <div>
          <EmptySpace />
          <h2
            style={{
              textAlign: "center",
              fontWeight: "200",
              marginBottom: "20px",
            }}
          >
            UPCOMING EVENTS
          </h2>
          <GrayDivider />
          {data.events.length > 0
            ? data.events.map((el) => (
                <Container style={{ width: "60%" }} key={el._id}>
                  <Row>
                    <Col xs="3">
                      <Row>
                        <h5 style={{ fontWeight: "light" }}>{formattedDate}</h5>
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
                      <div>
                        <Button
                          style={{
                            color: "white",
                            backgroundColor: "#A66D60",
                            border: "solid 1px #A66D60",
                            marginBottom: "8px",
                            justifyContent: "center",
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
                              justifyContent: "center",
                            }}
                            onClick={() => handleUpdateEvent(el._id)}
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
                            justifyContent: "center",
                          }}
                          onClick={() => handleDeleteEvent(el._id)}
                        >
                          Delete Event
                        </Button>
                      </div>
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
            : <p style={{textAlign: "center"}}>No upcoming events, check back soon!</p>}
        </div>
      );
    } else {
      return (
        phone >= window.innerWidth ?
        <div>
          <EmptySpace />
          <h2
            style={{
              textAlign: "center",
              fontWeight: "200",
              marginBottom: "20px",
            }}
          >
            UPCOMING EVENTS
          </h2>
          <GrayDivider />
          {data.events.length >= 1
            ? data.events.map((el) => (
                <Container key={el._id} style={{ width: "60%" }}>
                  <Row>

                      <Row>
                        <h4 style={{textAlign: "center"}}>{el.title}</h4>
                      </Row>
                      <Row>
                        <p style={{ color: "#393D3F", textAlign: "center" }}>
                          {el.address}
                          <br />
                          {el.city},&nbsp;
                          {el.state}&nbsp;
                          {el.zip}
                        </p>
                      </Row>
                      <Row>
                        <h5 style={{ fontWeight: "light", textAlign: "center" }}>{formattedDate}</h5>
                      </Row>
                      <Row>
                        <p style={{ color: "#393D3F", textAlign: "center" }}>
                          {el.startTime}-{el.endTime}
                        </p>
                      </Row>
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
                    <Divider
                      style={{
                        borderBottom: "solid 1px #A66D60",
                        width: "100%",
                      }}
                    />
                  </Row>
                </Container>
              ))
            : <p style={{textAlign: "center"}}>No upcoming events, check back soon!</p>}
        </div>
        :
        <div>
          <EmptySpace />
          <h2
            style={{
              textAlign: "center",
              fontWeight: "200",
              marginBottom: "20px",
            }}
          >
            UPCOMING EVENTS
          </h2>
          <GrayDivider />
          {data.events.length >= 1
            ? data.events.map((el) => (
                <Container key={el._id} style={{ width: "60%" }}>
                  <Row>
                    <Col xs="3">
                      <Row>
                        <h5 style={{ fontWeight: "light" }}>{formattedDate}</h5>
                      </Row>
                      <Row>
                        <p style={{ color: "#393D3F" }}>
                          {el.startTime}-{el.endTime}
                        </p>
                      </Row>
                    </Col>
                    <Col xs="6">
                      <Row>
                        <h4>{el.title}</h4>
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
            : <p style={{textAlign: "center"}}>No upcoming events, check back soon!</p>}
        </div>
      );
    }
  }
  return <div>{showEvent()}</div>;
};
export default Events;

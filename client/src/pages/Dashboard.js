import React from "react";
import { EmptySpace } from "../components/EmptySpace";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Dashboard = () => {
  function showDashboard() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <EmptySpace />
          <div style={{ display: "flex" }}>
            <div
              style={{
                margin: "0 auto",
              }}
            >
              <Link to="/addphoto">
                <Button
                  style={{
                    margin: "8px",
                    color: "white",
                    backgroundColor: "#A66D60",
                    border: "solid 1px #A66D60",
                  }}
                >
                  ADD PHOTO
                </Button>
              </Link>

              <Link to="/addevent">
                <Button
                  style={{
                    margin: "8px",
                    color: "white",
                    backgroundColor: "#A66D60",
                    border: "solid 1px #A66D60",
                  }}
                >
                  ADD EVENT
                </Button>
              </Link>
            </div>
          </div>
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

  return <div>{showDashboard()}</div>;
};

export default Dashboard;

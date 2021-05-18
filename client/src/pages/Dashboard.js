import React from "react";
import { EmptySpace } from "../components/EmptySpace";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
};

export default Dashboard;

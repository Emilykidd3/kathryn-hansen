import React from "react";
import { ViewHolder } from "../components/ViewHolder";

const Home = () => {
  return (
    <ViewHolder
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/im-all-ears.jpg)`,
        width: "100%",
        // height: "100%",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "90%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontWeight: "200", color: "white" }}>COLORED PENCIL DRAWINGS</h2>
        <h4 style={{ fontWeight: "200", color: "white" }}>
          "Capturing the essence and soul of each animal I draw, along with their spirit and beauty are integral facets in each drawing I create"
        </h4>
      </div>
    </ViewHolder>
  );
};

export default Home;

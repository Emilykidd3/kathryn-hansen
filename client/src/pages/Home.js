import React from "react";
import { ViewHolder } from "../components/ViewHolder";

const Home = () => {
  return (
    <ViewHolder
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/im-all-ears.jpg)`,
        width: "100%",
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
        text lorem ipsum words text lorem ipsum words text lorem ipsum words
        text lorem ipsum words text lorem ipsum words text lorem ipsum words
        text lorem ipsum words text lorem ipsum words text lorem ipsum words
      </div>
    </ViewHolder>
  );
};

export default Home;

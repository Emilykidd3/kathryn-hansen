import React from "react";
import { ViewHolder } from "../components/ViewHolder";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Events from "./Events";

// use media queries for height (mobile etc)

// opactiy layer and darkening css or actual photo

const phone = 415

const Home = () => {
  return phone >= window.innerWidth ? (
    <div>
      <ViewHolder
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/im-all-ears.jpg)`,
          width: "100%",
          minHeight: "500px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            width: "80%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontWeight: "200", color: "white" }}>
            COLORED PENCIL DRAWINGS
          </h2>
          <h4 style={{ fontWeight: "200", color: "white" }}>
            "Capturing the essence and soul of each animal I draw, along with
            their spirit and beauty are integral facets in each drawing I
            create"
          </h4>
        </div>
      </ViewHolder>
      <Gallery />
      <About />
      <Events />
      <Contact />
    </div>
  ) : (
    <div>
      <ViewHolder
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/im-all-ears.jpg)`,
          width: "100%",
          minHeight: "1000px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontWeight: "200", color: "white" }}>
            COLORED PENCIL DRAWINGS
          </h2>
          <h4 style={{ fontWeight: "200", color: "white" }}>
            "Capturing the essence and soul of each animal I draw, along with
            their spirit and beauty are integral facets in each drawing I
            create"
          </h4>
        </div>
      </ViewHolder>
      <Gallery />
      <About />
      <Events />
      <Contact />
    </div>
  );
};

export default Home;

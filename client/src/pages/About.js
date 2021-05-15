import React from "react";
import { Container, Row, Col } from "reactstrap";
import { EmptySpace } from "../components/EmptySpace";
import {MarginP} from '../components/MarginP'

const About = () => {
  return (
    <div>
      <EmptySpace />
      <Container>
        <Row>
          <Col>
            <img
              src={`${process.env.PUBLIC_URL}/images/kathryn-hansen.jpg`}
              alt="elephant"
              style={{ width: "80%" }}
            ></img>
          </Col>
          <Col>
            <div style={{ textAlign: "center" }}>
              <MarginP>
                Standing precariously on the drab brown step stool, Ms
                Willenson, my second grade teacher, adjusted my drawing of a
                circular, grey owl on the library wall. Having your artwork hung
                in the school library meant you were big cheese at Donges Bay
                Elementary school in Wisconsin! I remember what a great day that
                was and the very first inklings I had of wanting to be an artist
                when I grew up.
            </MarginP>
            <MarginP> 
                I went on to earn my BFA defgree in studio arts from the
                University of Wisconsin, Stevents Point in 1983. I also studied
                art at the Milwaukee Institute of Art and Design, the Associates
                of Art in Sherman Oaks, CA and studied under Margo Lennartz in
                La Crescenta, CA.
            </MarginP>
            <MarginP>
                All these years later I still love drawing owls, although not
                quite as rotund, along with all sorts of other amazing
                critters…they are a never ending source of inspiration in my
                art. Capturing the essence and soul of each animal I draw, along
                with their spirit and beauty are integral facets in each drawing
                I create. 
            </MarginP>
            <MarginP>
                I hope my art inspires each viewer to realize their connection
                to all living things, and to have a positive impact on this
                planet so that together we can help preserve the exquisite
                complexity of our earth for many years to come. 
                With the sale of each original drawing a portion of the sale is
                donated to a favorite charity or rescue. Some of my favorites
                are the California Wildlife Center, Animals Asia Foundation, the
                David Sheldrick Wildlife Trust, and Old Friends Senior Dog
                Sanctuary, to name just a few.
              </MarginP>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

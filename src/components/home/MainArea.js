import React from "react";
import Image from "react-bootstrap/Image";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";
import MainDressImg from "../../images/Red-rose-dress.jpeg";
import MainJewelryImg from "../../images/ring.jpeg";

function MainArea(props) {
  return (
    // <Row class="jumbotron-row">
    //   <Jumbotron className="col-md-7" fluid>
    //     <Image src={MainDressImg} alt="red rose dress" fluid />
    //   </Jumbotron>

    //   <Jumbotron className="col-md-5" fluid>
    //     {/* <Image src={MainJewelryImg} alt="ruby necklace" id="necklace-img" fluid /> */}
    //     <Image src={MainRingImg} alt="ruby necklace" id="necklace-img" fluid />
    //     <p className="jumbotron-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis facere delectus nesciunt distinctio ipsa dolores dolor totam voluptate recusandae! Show exquisite jewelry</p>
    //   </Jumbotron>
    // </Row>

    <Row class="jumbotron-row">
      <Card>
          <Card.Img variant="top" src={MainDressImg} fluid="true" />
      </Card>
      <Card>
          <Card.Img variant="top" src={MainJewelryImg} fluid="true" />
      </Card>

    </Row>
  );
}

export default MainArea;

import React from "react";
import { Row, Card, Button } from "react-bootstrap";
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
      <Card className="w-100">
        <div className="dress-image-overlay">
          <p>From casual to stunning evening styles, browse designer dresses for every occasion. </p>
          <Button variant="custom" className="btn-on-top" href="/dresses">Shop Dresses</Button>
        </div>
        <Card.Img variant="top" src={MainDressImg} fluid="true" />
      </Card>
      <Card className="w-100">
          <div className="jewelry-image-overlay">
            <p>From casual to stunning evening styles, browse designer dresses for every occasion. </p>
            <Button variant="custom" className="btn-on-top jewelry" disabled>Shop Jewelry</Button>
          </div>
          <Card.Img variant="top" src={MainJewelryImg} fluid="true" />
      </Card>
    </Row>
  );
}

export default MainArea;

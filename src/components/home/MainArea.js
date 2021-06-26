import React from 'react';
import Image from 'react-bootstrap/Image';
import { Jumbotron, Container } from 'react-bootstrap';
import MainImg from '../../images/Red-rose-dress.jpeg'

function MainArea(props) {
    return(
        <Jumbotron fluid>
          <Container>
            {/* <picture> */}
                {/* <source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>
                <source media="(min-width:465px)" srcset="img_white_flower.jpg"/> */}
                {/* <img src="Red-rose-dress.png" alt="Red rose dress"/> */}
                <Image src={MainImg} alt="" fluid />
                
            {/* </picture> */}
            </Container>
        </Jumbotron>
    );
}

export default MainArea;
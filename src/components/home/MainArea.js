import React from 'react';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import MainImg from '../../images/Red-rose-dress.png'

function MainArea(props) {
    return(
        <Jumbotron>
            {/* <picture> */}
                {/* <source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>
                <source media="(min-width:465px)" srcset="img_white_flower.jpg"/> */}
                {/* <img src="Red-rose-dress.png" alt="Red rose dress"/> */}
                <Image src={MainImg} alt="" fluid />
                
            {/* </picture> */}
        </Jumbotron>
    );
}

export default MainArea;
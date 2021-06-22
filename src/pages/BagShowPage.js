import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Bag } from 'react-bootstrap-icons';
import DressesModel from '../models/DressesModel';
import UsersModel from '../models/UsersModel';
import { Carousel, Row, Container, Button } from 'react-bootstrap';

function BagShowPage() {
    const [bagItems, setBagItems] = useState([]);
    
    useEffect(() => {
        const fetchBag = async () => {
            const response = await UsersModel.getUser();
            console.log('fetched bag response ====> ', response);
            setBagItems(response);

            // const imgArr = response.imgUrls.map((url) => {
            //   return (
            //     <Carousel.Item key={response.url}>
            //       <img
            //           className="d-block"
            //           src={url}
            //           alt="Dress slide"
            //           style={{ maxHeight: 900 }}
            //       />
            //     </Carousel.Item>
            //   )
            // });
            // setCarouselItemsArr(imgArr);
            
        } ;
        // console.log('Value of dress===>', dress)

        if(bagItems === null) {
          fetchBag();
        }
    });
    
    // function handleAddToCart(event) {
    //   event.preventDefault();
    //   UsersModel.addToCart(dress._id).then()
    // }
    
    if(!bagItems) {
        return <div>Sorry, can't display item at this time.</div>
    } else {
        return(
            <div>bagItems</div>
        )
    }
}

export default BagShowPage;
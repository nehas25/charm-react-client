import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Bag } from 'react-bootstrap-icons';
import DressesModel from '../models/DressesModel';
import UsersModel from '../models/UsersModel';
import { Carousel, Row, Container, Button } from 'react-bootstrap';

function DressShowPage() {
    let { dressid } = useParams();
    const [dress, setDress] = useState(null);
    const [carouselItemsArr, setCarouselItemsArr] = useState([]);
    
    useEffect(() => {
        const fetchDress = async () => {
            const response = await DressesModel.getDress(dressid);
            console.log('fetched dress response ====> ', response);
            setDress(response);

            const imgArr = response.imgUrls.map((url) => {
              return (
                <Carousel.Item key={response.url}>
                  <img
                      className="d-block"
                      src={url}
                      alt="Dress slide"
                      style={{ maxHeight: 900 }}
                  />
                </Carousel.Item>
              )
            });
            setCarouselItemsArr(imgArr);
            
        } ;
        console.log('Value of dress===>', dress)

        if(dress === null) {
          fetchDress();
        }
    });
    
    function handleAddToCart(event) {
      event.preventDefault();
      UsersModel.addToCart(dress._id).then()
    }
    
    if(!dress) {
        return <div>Sorry, can't display item at this time.</div>
    } else {
        return(
            <Container fluid="sm">
              <Row>
                <Carousel fade>
                  {carouselItemsArr}
                </Carousel>
              </Row>
              <div>
                  <p>{dress.name}</p>
                  <p>{dress.description}</p>
                  <p>{dress.price}</p>
                  <Button variant="primary" onClick={handleAddToCart}><Bag></Bag>Add To Cart</Button>
              </div>
            </Container>
        )
    }
}

export default DressShowPage;
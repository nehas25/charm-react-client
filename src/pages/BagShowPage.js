import React, { useState, useEffect } from 'react';
import UsersModel from '../models/UsersModel';
import ProductsModel from '../models/ProductsModel';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

function BagShowPage(props) {
    const [bagItems, setBagItems] = useState(null);
    // const [bagItemsDetails, setBagItemsDetails] = useState([]);
    
    useEffect(() => {
      fetchBag();
      console.log('Value of bagItems ===> ', bagItems)
    }, [ ]);

    const fetchBag = async () => {
      let localBagItems;
      if(props.userid) {
        // fetchedBag = await UsersModel.getUser();
        // console.log('fetched bag fetchedBag ====> ', fetchedBag);
        // setBagItems(fetchedBag.cartItems);
      } else {
        localBagItems = JSON.parse(localStorage.getItem('bagItems'));
        if(localBagItems) {
          setBagItems(localBagItems);
          console.log('bagItems ==> ', bagItems);
          console.log('localBagItems ==> ', localBagItems);
        }
      }
  } ;

  const handleRemoveFromCart = (index) => {
    console.log('index ===> ',index);
    let localBagItems = JSON.parse(localStorage.getItem('bagItems'));
    localBagItems.splice(index, 1);
    localStorage.setItem('bagItems', JSON.stringify(localBagItems));
    fetchBag();
    props.updateItemsCount(localBagItems.length);
  }

  let cardsArr;
  if(bagItems) {
    cardsArr = bagItems.map((item, index) => {
      console.log(bagItems);
      return(
        <Col key={item._id}>
          <Card className="bag-item">
            <Card.Img className="bag-item-img" variant="top" src={item.productDetails.imgUrls[0]} />
            <Card.Body className="bag-item-body">
              <Card.Title>{item.productDetails.name}</Card.Title>
              <Card.Text>
                {item.productDetails.description}
              </Card.Text>
              <Card.Text>
                {item.productDetails.price} USD
              </Card.Text>
              <Card.Text>
                Size: {item.size}
              </Card.Text>
              <Card.Text>
                Quantity: {item.quantity}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              <Button variant="custom" onClick={() => handleRemoveFromCart(index)}>
                <Trash size={30}></Trash>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      )
    });    
  }

    if(!bagItems || !bagItems.length) {
        return <p>Bag is empty.</p>
    } else {
        return(
          <Container fluid="sm">
              <Row xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
                {cardsArr}
              </Row>
          </Container>
          
        )
    }
}

export default BagShowPage;
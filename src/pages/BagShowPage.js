import React, { useState, useEffect } from 'react';
import UsersModel from '../models/UsersModel';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

function BagShowPage() {
    const [bagItems, setBagItems] = useState(null);
    const [bagItemsDetails, setBagItemsDetails] = useState([]);
    
    useEffect(() => {
      fetchBag();
    }, []);

    const fetchBag = async () => {
      const response = await UsersModel.getUser();
      console.log('fetched bag response ====> ', response);
      setBagItems(response.cartItems);

      const cardsArr = response.cartItems.map((item) => {
        return(
          <Col key={item._id}>
            <Card className="bag-item">
              <Card.Img className="bag-item-img" variant="top" src={item.imgUrls[0]} />
              <Card.Body className="bag-item-body">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Text>
                  {item.price} USD
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <Button onClick={() => handleRemoveFromCart(item._id)}>
                  <Trash size={30}></Trash>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )
      });
      setBagItemsDetails(cardsArr);
  } ;

  const handleRemoveFromCart = async (itemid) => {
    console.log('itemid ===> ',itemid);
    await UsersModel.removeFromCart(itemid);
    fetchBag();
  }
    
    if(!bagItems) {
        return <div>Sorry, can't display item at this time.</div>
    } else {
        return(
          <Container fluid="sm">
              <Row xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
                {bagItemsDetails}
              </Row>
          </Container>
          
        )
    }
}

export default BagShowPage;
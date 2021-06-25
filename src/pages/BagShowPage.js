import React, { useState, useEffect } from 'react';
import UsersModel from '../models/UsersModel';
import ProductsModel from '../models/ProductsModel';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

function BagShowPage(props) {
    const [bagItems, setBagItems] = useState(null);
    const [bagItemsDetails, setBagItemsDetails] = useState([]);
    
    useEffect(() => {
      fetchBag();
    }, []);

    const fetchBag = async () => {
      let localBagItems;
      let prodDetails;
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
          const prodids = localBagItems.map((item) => item.productId);

          prodDetails = await ProductsModel.getProductDetails(prodids);
          console.log(typeof(prodDetails));
          console.log(prodDetails);
          setBagItemsDetails(prodDetails);
        }
      }
  } ;

  const handleRemoveFromCart = async (itemid) => {
    console.log('itemid ===> ',itemid);
    await UsersModel.removeFromCart(itemid);
    fetchBag();
  }

  const cardsArr = bagItemsDetails.map((item) => {
    return(
      <Col key={item._id}>
        <Card className="bag-item">
          <Card.Img className="bag-item-img" variant="top" src={item.imgUrls[0]} />
          <Card.Body className="bag-item-body">
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Card.Text>
              {item.price} USD
            </Card.Text>
            <Card.Text>
              {} USD
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

    if(!bagItems) {
        return <div>Bag is empty.</div>
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
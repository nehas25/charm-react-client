import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Bag } from "react-bootstrap-icons";
import ProductsModel from "../models/ProductsModel";
import {
  Carousel,
  Row,
  Col,
  Container,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";

function DressShowPage(props) {
  let { dressid } = useParams();
  const [dress, setDress] = useState(null);
  const [selectedQuantity, setselectedQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    fetchDress();
    console.log("Value of dress===>", dress);
  }, []);

  const fetchDress = async () => {
    const fetchedDress = await ProductsModel.getProduct(dressid);
    console.log("fetched dress fetchedDress ====> ", fetchedDress);
    setDress(fetchedDress);
  };

  function handleAddToCart() {
    if (props.userid) {
    } else {
      const item = {
        productId: dressid,
        size: selectedSize,
        quantity: selectedQuantity,
        productDetails: dress,
      };
      let items = [];
      let localBagItems = localStorage.getItem("bagItems");
      if (!localBagItems) {
        items.push(item);
      } else {
        items = JSON.parse(localBagItems) || [];
        items.push(item);
      }
      localStorage.setItem("bagItems", JSON.stringify(items));
      props.updateItemsCount(items.length);
    }
  }

  function incrementselectedQuantity() {
    setselectedQuantity(selectedQuantity + 1);
  }

  function decrementselectedQuantity() {
    if (selectedQuantity > 0) {
      setselectedQuantity(selectedQuantity - 1);
    }
  }

  function handleSetSize(value) {
    setSelectedSize(value);
  }

  let imgArr, sizeButtons;
  if (dress) {
    imgArr = dress.imgUrls.map((url) => {
      return (
        <Carousel.Item key={dress.url}>
          <img
            // className="d-block"
            src={url}
            alt="Dress slide"
            style={{ maxHeight: 800 }}
          />
        </Carousel.Item>
      );
    });

    sizeButtons = dress.size.map((size) => {
      return (
        <ToggleButton variant="custom" value={size}>
          {size}
        </ToggleButton>
      );
    });
  }

  if (!dress) {
    return <div>Sorry, can't display item at this time.</div>;
  } else {
    return (
      <Container fluid="sm" className="prod-details-container">
        <Row>
          <Col>
            <Carousel fade>{imgArr}</Carousel>
          </Col>
          <Col>
            <div className="prod-details-show">
              <p>{dress.name}</p>
              <p>{dress.description}</p>
              <p>{dress.price}</p>
              <ToggleButtonGroup
                onChange={handleSetSize}
                size="lg"
                className="mb-2"
                type="radio"
                name="options"
              >
                {sizeButtons}
              </ToggleButtonGroup>
              <div className="select-qty-control">
                <Button
                  variant="custom"
                  onClick={decrementselectedQuantity}
                  className="minus-btn"
                >
                  -
                </Button>
                <span> {selectedQuantity} </span>
                <Button variant="custom" onClick={incrementselectedQuantity}>
                  +
                </Button>
              </div>
              <Button
                variant="custom"
                className="add-to-bag-btn"
                onClick={handleAddToCart}
                disabled={!(selectedSize && selectedQuantity)}
              >
                <Bag className="bag-icon-in-btn"></Bag>Add To Bag
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DressShowPage;

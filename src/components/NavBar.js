import React, { useState } from "react";
import { Bag, Person } from "react-bootstrap-icons";
import { Badge, Button, Navbar, Nav } from "react-bootstrap";
import LoginSignupModal from "./LoginSignupModal";

function NavBar(props) {
  const [show, setShow] = useState(false);

  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center flex-grow-1">
          <Nav>
            {/* <li><NavLink exact to="/dresses">Dresses</NavLink></li> */}
            <Nav.Link href="/dresses" className="nav-link dresses">Dresses</Nav.Link>
            {/* <li><NavLink exact to="#">Jewelry</NavLink></li> */}
            <Nav.Link href="#" id="jewelry-nav-link" className="nav-link jewelry">Jewelry</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end flex-grow-0">
            <Button
              type="button"
              className="btn"
              onClick={openModal}
              variant="custom"
            >
              <Person size={30}></Person>
            </Button>
            <Button href="/cart" variant="custom">
              <Bag size={30}></Bag>
              <Badge>{props.bagItemsCount}</Badge>
            </Button>
          </Navbar.Collapse>
        
      </Navbar>
      <LoginSignupModal
        show={show}
        openModal={openModal}
        closeModal={closeModal}
        token={props.token} 
        addToken={props.addToken}
        isLoggedIn={props.isLoggedIn}
        handleSuccessfulLogin={props.handleSuccessfulLogin}
        handleLogout={props.handleLogout}
        username={props.username}
      />
    </>
  );
}

export default NavBar;

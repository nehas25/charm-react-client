import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Bag, Person } from 'react-bootstrap-icons';
import { Badge, Button } from 'react-bootstrap';
import LoginSignupModal from './LoginSignupModal';

function NavBar(props) {
    const [show, setShow] = useState(false);

    function openModal() {
      setShow(true);
    }

    function closeModal() {
      setShow(false);
    }

    return(
      <>
        <nav>
            <ul>
                <li><NavLink exact to="/dresses">Dresses</NavLink></li>
                <li>Jewelry</li>
            </ul>
            <ul>
                <li>Cart</li>
                <li><Button type="button" className="btn btn-secondary" onClick={openModal}>
                  <Person color="royalblue" size={30}></Person>
                  </Button>
                </li>
                <li>
                  <Button href="/cart" variant="light">
                    <Bag color="royalblue" size={30}></Bag>
                    <Badge bg="secondary">New</Badge>
                  </Button>
                </li>
            </ul>
        </nav>
        <LoginSignupModal show={show} openModal={openModal} closeModal={closeModal}/>
      </>
    );
    
}

export default NavBar;
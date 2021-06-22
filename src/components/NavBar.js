import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bag } from 'react-bootstrap-icons';
import { Badge, Button } from 'react-bootstrap';

function NavBar(props) {
    return(
        <nav>
            <ul>
                <li><NavLink exact to="/dresses">Dresses</NavLink></li>
                <li>Jewelry</li>
            </ul>
            <ul>
                <li>Cart</li>
                <li>Login</li>
                <li>
                  <Button href="/cart" variant="light">
                    <Bag color="royalblue" size={30}></Bag>
                    <Badge bg="secondary">New</Badge>
                  </Button>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
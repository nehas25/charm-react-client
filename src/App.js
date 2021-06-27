import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withRouter, NavLink } from 'react-router-dom';
import Routes from './config/routes';
import NavBar from './components/NavBar';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {Nav, Card} from 'react-bootstrap';


function App() {
  const [bagItemsCount, setBagItemsCount] = useState(null);

  function updateItemsCount() {
    const bagItems = JSON.parse(localStorage.getItem('bagItems'));
    if(bagItems) {
      const count = JSON.parse(localStorage.getItem('bagItems')).length;
      console.log('items count ==== ', count);
      setBagItemsCount(count);
    }
  }

  useEffect(() => {
    updateItemsCount();
  })

  return (
    <>
    <div class="wrapper-all-pages">
      <Nav.Link href="/" className="title-bar"><h1>Charm</h1></Nav.Link>
      {/* <NavLink exact to="/"><h1>Charm</h1></NavLink> */}
      {/* <NavBar bagItemsCount={bagItemsCount} /> */}
      <NavBar bagItemsCount={bagItemsCount} />
      <Routes updateItemsCount={updateItemsCount}/>
      
      {/* <footer className="text-muted">2 days ago</footer> */}
      {/* <MainArea /> */}
      {/* <DressIndexPage /> */}
    </div>
    <Card.Footer className="text-muted">&copy; 2021 Charm</Card.Footer>
    </>
  );
}

export default withRouter(App);

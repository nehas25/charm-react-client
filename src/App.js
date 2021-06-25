import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withRouter, NavLink } from 'react-router-dom';
import Routes from './config/routes';
import NavBar from './components/NavBar';
import React, { useState } from 'react';



function App() {
  const [bagItemsCount, setBagItemsCount] = useState(null);

  function updateItemsCount(count) {
    setBagItemsCount(count);
  }

  return (
    <div>
      <NavLink exact to="/"><h1>Charm</h1></NavLink>
      <NavBar bagItemsCount={bagItemsCount} />
      <Routes updateItemsCount={updateItemsCount}/>
      {/* <MainArea /> */}
      {/* <DressIndexPage /> */}
    </div>
  );
}

export default withRouter(App);

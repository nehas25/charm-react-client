import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withRouter, NavLink } from 'react-router-dom';
import Routes from './config/routes';
import NavBar from './components/NavBar';
import React, { useState } from 'react';
import { useEffect } from 'react';



function App() {
  const [bagItemsCount, setBagItemsCount] = useState(null);

  function updateItemsCount() {
    const count = JSON.parse(localStorage.getItem('bagItems')).length;
    console.log('items count ==== ', count);
    setBagItemsCount(count);
  }

  useEffect(() => {
    updateItemsCount();
  })

  return (
    <div>
      <NavLink exact to="/"><h1>Charm</h1></NavLink>
      {/* <NavBar bagItemsCount={bagItemsCount} /> */}
      <NavBar bagItemsCount={bagItemsCount} />
      <Routes updateItemsCount={updateItemsCount}/>
      {/* <MainArea /> */}
      {/* <DressIndexPage /> */}
    </div>
  );
}

export default withRouter(App);

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DressIndexPage from '../pages/DressIndexPage';
import DressShowPage from '../pages/DressShowPage';
import BagShowPage from '../pages/BagShowPage';

function Routes(props) {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/dresses' component={DressIndexPage} />
      <Route path='/dresses/:dressid' component={DressShowPage} />
      <Route path='/cart/' component={BagShowPage} />
    </Switch>
  );
}

export default Routes;
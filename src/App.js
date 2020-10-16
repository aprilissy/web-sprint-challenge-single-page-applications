import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home';

const initialForm = {
  userName: '',
  pizzaSizeDrp: '',
  specialInst: '',
  topOne: false,
  topTwo: false,
  topThree: false,
  topFour: false,
}

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>

      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;

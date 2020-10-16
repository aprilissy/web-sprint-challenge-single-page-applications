import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';

import Home from './components/Home';
import PizzaForm from './components/PizzaForm';
import validation from './components/Validation'

const initialForm = {
  orderName: '',
  pizzaSizeDrp: '',
  specialInst: '',
  topOne: false,
  topTwo: false,
  topThree: false,
  topFour: false,
}

const disabled = true;


const App = () => {

  const [order, setOrder] = useState([]);

  const [formValues, setFormValues] = useState(initialForm)


  // const submitPizza = () => {
  //   let newPizza = {
  //     orderName: formV
  //   }
  // }

  yup
    .reach(validation, orderName)
    .validate(value)
    .then(() => {
      setFormValues({
        ...formValues,
        [orderName]: '',
      })
    })


  return (
    <>
      <nav>
        <div>
          <Link to='/'>Home</Link>
          <Link to='./pizza-form'>Pizza</Link>
        </div>
        <h1>Lambda Eats</h1>
        <p>Come eat our food... or don't</p>
      </nav>

      <Switch>
        <Route path='/pizza-form'>
          <PizzaForm />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;

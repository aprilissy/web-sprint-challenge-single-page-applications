import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

import Home from './components/Home';
import PizzaForm from './components/PizzaForm';
import validation from './components/Validation';

const initialForm = {
  orderName: '',
  pizzaSizeDrp: '',
  specialInst: '',
  mushrooms: false,
  spinach: false,
  sausage: false,
  pineapple: false,
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

  const postNewOrder = (newOrder) => {
    axios
      .post('https://reqres.in', newOrder)
      .then((res) => {
        setOrder([res.data, ...order]);
        setFormValues(initialForm);
      })
      .catch((err) => {
        debugger
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(validation, name)
      .validate(value)
      .then(() => {
        setFormValues({
          ...formValues,
          [name]: '',
        })
      })
      .catch((err) => {
        setFormValues({
          ...formValues,
          [name]: err.errors[0],
        });
      });

      setFormValues({
        ...formValues,
        [name]: value,
      })

  };

  const formSubmit = () => {
    const newOrder = {
      orderName: formValues.orderName.trim(),
      specialInst: formValues.specialInst.trim(),
      toppings: ['mushrooms', 'spinach', 'sausage', 'pineapple'].filter(
        (toppings) => formValues[toppings]
      )
    }
  }


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
          <PizzaForm 
            values={formValues}
            change={inputChange}
          />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <pre>
       {JSON.stringify(order)}
      </pre>
    </>
    
  );
};
export default App;

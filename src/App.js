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

const initialErrors = {
  orderName: '',
  pizzaSizeDrp: '',
  specialInst: '',
  mushrooms: false,
  spinach: false,
  sausage: false,
  pineapple: false,
}

//const disabled = true;


const App = () => {

  const [order, setOrder] = useState([]);

  const [formValues, setFormValues] = useState(initialForm);
  console.log("FORM: ", formValues)

  const [formErrors, setFormErrors] = useState(initialErrors);

  // const submitPizza = () => {
  //   let newPizza = {
  //     orderName: formV
  //   }
  // }

  const postNewOrder = (newOrder) => {
  console.log("postNewOrder -> newOrder", newOrder)
    
    axios
      .post('https://reqres.in/api/orders', newOrder)
      .then((res) => {
        console.log("ORDER SET")
        setOrder([res.data, ...order]);
        setFormValues(initialForm);
      })
      .catch((err) => {
        console.log("ERR: ", err)
      });
  };

  const inputChange = (name, value) => {
    console.log(name, value)
    yup
      .reach(validation, name)
      .validate(value)
      .then(() => {
        console.log("SETTING: ", name, value)
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

      setFormValues({
        ...formValues,
        [name]: value,
      });

  };

  const formSubmit = () => {
    const newOrder = {
      orderName: formValues.orderName.trim(),
      specialInst: formValues.specialInst.trim(),
      pizzaSizeDrp: formValues.pizzaSizeDrp,
      toppings: ['mushrooms', 'spinach', 'sausage', 'pineapple'].filter(
        (toppings) => formValues[toppings]
      )
    }
    postNewOrder(newOrder);
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
            submit={formSubmit}
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

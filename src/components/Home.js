import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  const pizzaRoute = () => {
    history.push('/ the pizza form');
  };

  return (
    <div>
      <img
        className='home-pic'
        src='../Assets/Pizza.jpg'
        alt='Pizza'
      />
      <button onClick={pizzaRoute} className='home-button'>Choose Pizza!</button>
    </div>

  )
}
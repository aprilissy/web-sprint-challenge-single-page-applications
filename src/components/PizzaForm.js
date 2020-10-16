import React from 'react';

export default function PizzaForm() {
  

  const onChange = (evt) =>{
    const {name, value, type, checked} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    //change(name, valueToUse)
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
   // submit();
  };

  return (
    <form >
      <h2>Create Your Pizza!</h2>

      <label>
        Order Name
        <input
          name='ordername'
          type='text'

        />
      </label>

      <label>
        Choose crust size
        <select name='size' >
          <option value='---Select One---'>'---Select One---'</option>
          <option value='Small'>'Small'</option>
          <option value='Medium'>'Medium'</option>
          <option value='Large'>'Large'</option>
        </select>
      </label>

      <div>
        <h3>Toppings</h3>
        <label>
          Mushrooms
          <input
            name='mushrooms'
            type='checkbox'
          />
        </label>
        <label>
          Spinach
          <input
            name='spinach'
            type='checkbox'
          />
        </label>
        <label>
          Sausage
          <input
            name='sausage'
            type='checkbox'
          />
        </label>
        <label>
          Pineapple
          <input
            name='pineapple'
            type='checkbox'
          />
        </label>
      </div>  

      <label>
        Special Instructions
        <input
        name='special'
        type='text'
        />
      </label>

      <div className='submit'>
        <button>Add to Order</button>
      </div>
    </form>
  )
}
import React from 'react';

export default function PizzaForm(props) {
  const {values, change} = props
  console.log("PizzaForm -> values", values)

  const onChange = (evt) =>{
    const {name, value, type, checked} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
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
          value={values.orderName}
          onChange={onChange}
        />
      </label>

      <label>
        Choose crust size
        <select onChange={onChange} value={values.pizzaSizeDrp} name='size' >
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
            checked={values.mushrooms}
            onChange={onChange}
          />
        </label>
        <label>
          Spinach
          <input
            name='spinach'
            type='checkbox'
            checked={values.spinach}
            onChange={onChange}
          />
        </label>
        <label>
          Sausage
          <input
            name='sausage'
            type='checkbox'
            checked={values.sausage}
            onChange={onChange}
          />
        </label>
        <label>
          Pineapple
          <input
            name='pineapple'
            type='checkbox'
            checked={values.pineapple}
            onChange={onChange}
          />
        </label>
      </div>  

      <label>
        Special Instructions
        <input
        name='special'
        type='text'
        value={values.specialInst}
          onChange={onChange}
        />
      </label>

      <div className='submit'>
        <button>Add to Order</button>
      </div>
    </form>
  )
}
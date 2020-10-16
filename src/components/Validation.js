import * as yup from 'yup';

export default yup.object().shape({
  
   orderName: yup
    .string()
    .required('Order Name is required')
    .min(2, 'Order Name must be 2 or more characters')
    
})
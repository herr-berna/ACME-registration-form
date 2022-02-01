import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';

const Form = () => {
  // Por padrão, isSubmitted estará como false
  // const [isSubmitted, setIsSubmitted] = useState(false)

  // function submitForm() {
  //   setIsSubmitted(true)
  // }

  return <div>
    {/* {!isSubmitted ? (<FormSignUp submitForm={submitForm} />) : (<FormSuccess />)} */}
    <FormSignUp />
  </div>;
};

export default Form;
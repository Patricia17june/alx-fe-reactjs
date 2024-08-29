import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import './App.css'
import FormikForm from './components/FormikForm';

const App = () => {

  return (
     <div>
     <h2>User Registration</h2>
     <FormikForm />
     </div>
  );
};
export default App;

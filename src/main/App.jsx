import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

import SignUpForm from '../components/SignUpForm';
import Footer from '../components/Footer';

export default props =>
  <div className='main'>
    <SignUpForm />
    <Footer className="footer"/>
  </div>
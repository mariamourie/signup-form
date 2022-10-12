import React from "react";
import { useState } from "react";
import './SignUpForm.css';
import Illustration from '../assets/images/sectionForm.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'jquery';

export default function SignUpForm() {
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        
        setInputs(values => ( {...values, [inputName]: inputValue} ))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (inputs.email.length === 0) {
            alert('This field is required');
        } else if (inputs.password.length === 0) {
            alert('This field is required');          
        }
    }

    return (
        <section className="main-form mt-1 mt-xl-5">
            <section className="banner-area">
                <img src={Illustration} className="warning" alt="Ilustração de uma discussão" />
                <h3>Start for free and get attractive offers</h3>
            </section>
            <section className="form-area shadow p-3">
                <h2>Get's started</h2>
                <h6 className="mt-2">Already have an account? <strong className="span-text">Log in</strong></h6>
                <div className="button-group mt-3 mb-3">
                    <button className="btn btn-light"><i className="bi bi-google me-2"></i>Sign up with Google</button>
                    <button className="btn btn-primary"><i className="bi bi-facebook me-2"></i>Sign up with Facebook</button>
                </div>
                <div className="section-or mt-3 mb-3 ">
                    <h6> or </h6>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group text-start">
                        <label className="mb-2 label-form">Email address</label>
                        <div className="input-group">
                            <span className="input-group-text bg-light"><i className="bi bi-envelope"></i></span>
                            <input type="email" name="email" className="form-control" id="inputEmail"  value={inputs.email || ""} onChange={handleChange} />
                        </div>
                        <div className="invalid-feedback text-invalid mt-2 text-start">
                            Please enter an email
                        </div>
                    </div>
                    <div className="form-group d-flex flex-column mt-3 mb-3 text-start">
                        <label className="mb-2 label-form text-start">Password</label>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text bg-light"><i className="bi bi-lock"></i></span>
                            <input type="password" className="form-control" name="password" id="inputPassword" value={inputs.password || ""} onChange={handleChange} />
                        </div>
                        <div className="invalid-feedback text-invalid text-start mt-2">
                            Please enter a password
                        </div>
                    </div>
                    <div className="form-group d-flex mb-4 mt-2">
                        <input type="checkbox" className="form-check-input mb-1" name="termsOfService" /> 
                        <label className="ms-2 mt-md-0">I agree to Platform's <strong className="span-text">Terms of Service</strong> and <strong className="span-text">Privacy Policy</strong></label>
                    </div>
                    <div className="invalid-feedback text-invalid mt-2 text-start">
                        Accept the terms
                    </div>
                    <button type="submit" className="btn mt-3 button-main"> Register </button>
                </form>
            </section>
        </section>
    );
    
} 
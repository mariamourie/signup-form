import React, { useState, Component } from "react";
import './SignUpForm.css';
import Illustration from '../assets/images/sectionForm.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'jquery';

const initialState = {
    email: '',
    password: '',
    termsOfService: false
}

export default class SignUpForm extends Component{
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange(event) {
        const target = event.target;
        
        if(target.name === 'email') {
            this.setState({
                email: target.value
            });
        } else if (target.name === 'password') {
            this.setState({
                password: target.value
            })
        } else if (target.type === 'checkbox' && target.checked === true) {
            this.setState({
                termsOfService: true
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const element = document.querySelector('#textAlert');

        if(this.state.email === '' || this.state.password === '' || this.state.termsOfService === false) {
            element.classList.remove('invalid-feedback');
        } else {
            element.classList.add('invalid-feedback');
            document.querySelector('input[type=password]').value = '';
            document.querySelector('input[type=email]').value = '';
            document.querySelector('input[type=checkbox]').checked = false;
        }
    }

    render() { 
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
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className="form-group text-start">
                            <label className="mb-2 label-form">Email address</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light"><i className="bi bi-envelope"></i></span>
                                <input type="email" name="email" className="form-control" id="inputEmail"  value={this.state.email} onChange={e => this.handleChange(e)} />
                            </div>
                        </div>
                        <div className="form-group d-flex flex-column mt-3 mb-3 text-start">
                            <label className="mb-2 label-form text-start">Password</label>
                            <div className="input-group flex-nowrap">
                                <span className="input-group-text bg-light"><i className="bi bi-lock"></i></span>
                                <input type="password" className="form-control" name="password" id="inputPassword" value={this.state.password} onChange={e => this.handleChange(e)} />
                            </div>
                        </div>
                        <div className="form-group d-flex mb-4 mt-2">
                            <input type="checkbox" className="form-check-input mb-1" name="termsOfService" value={this.state.termsOfService} onChange={e => this.handleChange(e)} /> 
                            <label className="ms-2 mt-md-0">I agree to Platform's <strong className="span-text">Terms of Service</strong> and <strong className="span-text">Privacy Policy</strong></label>
                        </div>
                        <div className="invalid-feedback mt-2 text-start text-invalid" id="textAlert">
                            Inputs cannot be blank
                        </div>
                        <button type="submit" className="btn mt-3 button-main"> Register </button>
                    </form>
                </section>
            </section>
        );
    }
    
} 
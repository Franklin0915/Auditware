import React from "react";
import { GoogleButton, AppleButton, SubmitButton } from "./signIn";
import './signUp.css';
import styled from "styled-components";
import googleImage from './assets/images/google-image.png';
import appleImage from './assets/images/apple.png';
import slideImage from './assets/images/slide.png';
import { useNavigate } from 'react-router-dom'; 

function SignUp() {
  const [SignUp, setSignUp] = React.useState({ email: "", password: "", firstName: "", lastName: "" });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  function toSignIn() {
    navigate("/signin");
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setSignUp((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function togglePasswordVisibility() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <div className="mainContainer">
      <div className="left">
        <div className="name">Auditware Pro</div>
        <div className="left-mid-block">
          <div className="m-1">
            <p>Create an account</p>
          </div>
          <div className="m-2">
            <small>Welcome! Create an account to get started</small>
          </div>
          <div className="auth-buttons">
            <GoogleButton>
              <img src={googleImage} alt="Google Image" className="google-icon" />
              Continue with Google
            </GoogleButton>
            <AppleButton>
              <img src={appleImage}/> Continue with Apple
            </AppleButton>
          </div>
          <div className="lines">
            <hr />
            <span className="or-text">or</span>
            <hr />
          </div>
        </div>
        <form>
          <div className="name-field">
            <div className="f-name">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={SignUp.firstName}
                onChange={handleChange}
                id="first-name"
              />
            </div>
            <div className="l-name">
              <label htmlFor="second-name">Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={SignUp.lastName}
                onChange={handleChange}  
                id="second-name"        
              />
            </div>
          </div>
          <div className="first-input">
            <label htmlFor="input-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={SignUp.email}
              onChange={handleChange}
              id="input-1"
            />
          </div>
          <div className="second-input">
      <label htmlFor="input-2">Create a password</label>
      <input
        type={showPassword ? "text" : "password"} // Use conditional rendering based on showPassword state
        name="password"
        placeholder="Enter your password"
        value={SignUp.password}
        onChange={handleChange}
        id="input-2"
      />
      <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordVisibility}></i>
    
    </div>
          <aside className="login-button">
            <SubmitButton>Sign up</SubmitButton>
          </aside>
        </form>
        <div className="sign-in">Already have an account?<a href="#" onClick={toSignIn}>Sign in</a></div>
        <div className="terms">By signing up, you are confirming that you have read and agree with all
          <br/> our <a href="#">Terms and Conditions.</a></div>
      </div>
      <div className="right">
        <img src={slideImage} alt="Slide Image" />
      </div>
    </div>
  );
}

export default SignUp;

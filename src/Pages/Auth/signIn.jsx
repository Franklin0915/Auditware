// ./Pages/signIn.js

import React from "react";
import styled from "styled-components";
import './signIn.css';
import googleImage from './assets/images/google-image.png';
import apple from './assets/images/apple.png'
import slideImage from './assets/images/slide.png';
import { useNavigate } from 'react-router-dom'; 


function SignIn() {
  const [login, setLogin] = React.useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setLogin((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

    function toSignUp(){
      navigate('/signup');
    }
  return (
    <div className="mainContainer">
      <div className="left">
        <div className="name">Auditware Pro</div>
        <div className="left-mid-block">
          <div className="m-1">
            <p>Welcome back!</p>
          </div>
          <div className="m-2">
            <small>Log in with your email to continue</small>
          </div>
          <div className="auth-buttons">
            <GoogleButton>
                 <img src={googleImage} alt="Google Image" className="google-icon" />
                 Continue with Google
            </GoogleButton>

            <AppleButton>
            <img src={apple}  />
            Continue with Apple
             </AppleButton>
          </div>
          <div className="lines">
            <hr />
            <span className="or-text">or</span>
            <hr />
          </div>
        </div>
        <form>
          <div className="first-input">
            <label htmlFor="input-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={login.email}
              onChange={handleChange}
              id="input-1"
            />
          </div>
          <div className="second-input">
            <label htmlFor="input-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={login.password}
              onChange={handleChange}
              id="input-2"
            />
            <aside className="forgot-password"> <a href="">Forgot password?</a></aside>
          </div>
          <aside className="login-button">
            <SubmitButton onClick={toSignUp} >Log in</SubmitButton>
          </aside>
        </form>
        <div className="sign-up">Don't have an account?<a href="">Sign up</a></div>
      </div>
      <div className="right">
        <img src={slideImage}/>
      </div>
    </div>
  );
}

export const SubmitButton = styled.button`
   width:430px;
   border-radius:12px;
   padding: 10px;
   border: 1px solid #ccc;
   color:white;
   background-color: #40ABA4;
   margin:0 0 20px 0;
`;

export const GoogleButton = styled.button`
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #40ABA4;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 430px;
  border-radius: 12px;

  .google-icon {
    height: 20px; /* Set the desired height */
    margin: 0 10px 0 6rem; /* Adjust the margin according to your design */
  }
`;

export const AppleButton = styled.div`
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #40ABA4;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 430px;
  border-radius: 12px;

  img {
    height: 20px; /* Set the desired height */
    margin: 0 10px 0 6rem; /* Adjust the margin according to your design */
  }
`;

export default SignIn;

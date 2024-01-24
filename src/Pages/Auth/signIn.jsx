// ./Pages/signIn.js

import React from "react";
import styled from "styled-components";
import './signIn.css';
import googleImage from './assets/images/google-image.png';
import apple from './assets/images/apple.png'
import slideImage from './assets/images/slide.png';

function SignIn() {
  const [login, setLogin] = React.useState({ email: "", password: "" });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setLogin((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
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
          <button className="google-button">
            <img src={googleImage} alt="Google Image" className="google-icon" />
            Continue with Google
          </button>

            <button className="apple-button">
              <img src={apple}/> Continue with Apple
            </button>
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
            <SubmitButton>Log in</SubmitButton>
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

const GoogleButton = styled.button`

`;

export default SignIn;

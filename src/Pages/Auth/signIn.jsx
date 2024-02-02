// ./Pages/signIn.js

import React, { useEffect } from "react";
import styled from "styled-components";
import './signIn.css';
import googleImage from './assets/images/google-image.png';
import apple from './assets/images/apple.png'
import slideImage from './assets/images/slide.png';
import { useNavigate } from 'react-router-dom'; 
import Wrapper from "./Components/Wrapper";
import { brand } from "../../Assets";
import session from "../../Store/Session";
import { Link } from 'react-router-dom';


function SignIn() {
  const [login, setLogin] = React.useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setLogin((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function togglePasswordVisibility() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  function toSignUp(){
    navigate('/signup');
  }

  const skipLogin = (e) => {
    e.preventDefault()
    session.set('isLogin', true)
    setTimeout(() => {
      navigate('/')
    }, 500);
  }

  return (
    <Wrapper  content={<>
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
      <form onSubmit={(e)=>skipLogin(e)}>
          <InputContainer className="first-input">
              <label htmlFor="input-1">Email</label>
              <MainInput
                type="email"
                placeholder="Enter your email"
                name="email"
                value={login.email}
                onChange={handleChange}
                id="input-1"
              />
          </InputContainer>
        <InputContainer className="second-input">
          <label htmlFor="input-2">Password</label>
          <MainInput
            type={showPassword ? "text" : "password"} 
            name="password"
            placeholder="Enter your password"
            value={login.password}
            onChange={handleChange}
            id="input-2"
          />
          <i className={`fa-regular eye ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordVisibility}></i>
          <aside className="forgot-password"><Link to="">Forgot password?</Link></aside>
        </InputContainer>
        <aside className="login-button">
          <SubmitButton>Log in</SubmitButton>
        </aside>
      </form>
      <div className="sign-up">Don't have an account?<Link to="">Sign up</Link></div>
    </>}/>
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

   @media (max-width: 414px) {
    width: 340px;
    margin: 0 0 1rem 0;
  }

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

  @media (max-width: 414px) {
    width: 340px;
    margin: 0 0 1rem 0;
  }

  .google-icon {
    height: 20px; /* Set the desired height */
    margin: 0 10px 0 6rem;
  }

  p {
    margin: 0; /* Reset margin for the text */
  }
  
  @media (max-width: 414px) {
    .google-icon {
      margin: 0 0.5rem 0 4rem; 
    }

    p {
      margin-left: 10px; /* Add margin to the left of the text */
    }
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

  @media (max-width: 414px) {
    width: 340px;
    margin: 0 0 1rem 0;
    
    img {
      margin: 0 0.5rem 0 4rem; /* Adjust the margin to move the image to the left */
    }
  }
`;
  
export const MainInput = styled.input`
  border: 1px solid #ccc;
  width: 430px;
  margin: 0.5rem 0;
  padding: 10px;
  border-radius: 12px;

  @media (max-width: 414px) {
    width: 340px; 
    margin: 0 0 1rem 0;

    /* Select the label that is an adjacent sibling of EmailInput within the same container */
    + label {
      margin: 0 0 20px 0;
    }
  }
`;


export const InputContainer = styled.div`

margin:0.5rem 0 0 0;

label {
  display: flex; /* Set label to block display to position it above the input */
  margin-bottom: -7px; /* Adjusted margin to create a small gap between label and input */
}
.fa-regular{
  position: absolute;
  top: calc(50% - 0.8rem); 
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  
  // margin:0 0 10px 0; 
}

@media (max-width: 414px) {
  label {
    margin-bottom: 5px; /* Adjusted margin for smaller screens */
  }
}
  

`;



export default SignIn;

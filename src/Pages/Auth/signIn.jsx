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
import axios from 'axios';
import axiosInstance from "../../Service/axios";
import useMain from "../../Common/Hooks/useMain";
import Loading from "../../Common/Components/Loading";


function SignIn() {
  const {isLoading, setLoading} = useMain()
  const [detail, setDetail] = React.useState({ email_address: "admin@gmail.com", password: "password" });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setDetail((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function togglePasswordVisibility() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  const handleSubmit = async(event)=>{
    event.preventDefault()
    setLoading(true)
    try{
      const res = await axiosInstance.post(`/login`, detail);
      console.log(res)
      session.set('token', res.data?.token)
      session.set('isLogin', 'true')
      setTimeout(() => {
        setLoading(false)
        navigate('/dashboard');
      }, 500);
    }
    catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  const skipLogin = (e) => {
    e.preventDefault()
    session.set('isLogin', true)
    setTimeout(() => {
      navigate('/dashboard')
    }, 500);
  }

  return (
    <Wrapper  content={<>
      <Loading status={isLoading}/>
      <LeftCover>
      <LeftMidBlock className="left-mid-block">
        <WelcomeBack className="m-1">
          <p>Welcome back!</p>
        </WelcomeBack>
        <div className="m-2">
          Log in with your email to continue
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
      </LeftMidBlock>
      <form onSubmit={(e)=>handleSubmit(e)}>
          <InputContainer >
              <div>
                <label htmlFor="input-1">Email</label>
                <MainInput
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={detail.email_address}
                  onChange={handleChange}
                  id="input-1"
                />
              </div>
          </InputContainer>
        <InputContainer className="second-input">
          <div className="inputLabel">
            <label htmlFor="input-2">Password</label>
            <MainInput
              type={showPassword ? "text" : "password"} 
              name="password"
              placeholder="Enter your password"
              value={detail.password}
              onChange={handleChange}
              id="input-2"
            />
          </div>
          <i className={`fa-regular eye ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordVisibility}></i>
        </InputContainer>
        <aside className="forgot-password"><Link to="">Forgot password?</Link></aside>
        <aside className="login-button">
          <SubmitButton>Log in</SubmitButton>
        </aside>
      </form>
      <div className="sign-up">Don't have an account?<Link to="">Sign up</Link></div>
      


    </LeftCover>
      
    </>}/>
  );
}


export const LeftCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin: 2rem 0 0 0;
  




`
;

export const SubmitButton = styled.button`
   width:430px;
   border-radius:12px;
   padding: 10px;
   border: 1px solid #ccc;
   color:white;
   background-color: #40ABA4;
   margin:0 0 20px 0;

   @media (max-width: 414px) {
    width: 310px;
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
  export const WelcomeBack = styled.div`
  
  margin: 0 0 1rem 0;
  font-size: 40px;
  font-family:DM Sans;
  color:  #024744;
  font-weight: 700;
  

  
  `
  ;
  


export const InputContainer = styled.div`

margin:0.5rem 0 0 0;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;

label {
  display: flex; /* Set label to block display to position it above the input */
  margin-bottom: -7px; /* Adjusted margin to create a small gap between label and input */
}
.fa-regular{
  cursor: pointer;
}

@media (max-width: 414px) {
  label {
    margin-bottom: 5px; /* Adjusted margin for smaller screens */
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


export const LeftMidBlock = styled.div`

display: flex;
flex-direction: column;
align-items: center;







`
;



export default SignIn;

import React from "react";
import styled from "styled-components";
import './emailVerification.css';
import slideImage from './assets/images/slide.png';
import { useNavigate } from 'react-router-dom'; 
import Wrapper from "./Components/Wrapper";

function EmailVerification(){

    const [Code, setCode] = React.useState({ verificationCode: "" });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setCode((prevForm) => ({
          ...prevForm,
          [name]: type === "checkbox" ? checked : value,
        }));
      }

    return  <Wrapper content={<>
      <div className="left-mid-block">
        <div className="m-1">
          <p>Email verification</p>
        </div>
        <div className="m-2">
          enter the verification code sent to you email to<br/> continue
        </div>
      
      </div>
      <form>
        <div className="first-input">
          <label htmlFor="input-1">Verification code</label>
          <input
            type="text"
            placeholder="xxxx-xxxx"
            name="verificationCode"
            value={Code.verificationCode}
            onChange={handleChange}
            id="input-1"
          />
        </div>
        
        <aside className="login-button">
          <SubmitButton onClick="" >Continue</SubmitButton>
        </aside>
      </form>
      <div className="v-code">Didn't receive a code?<a href="">Resend in 5:00</a></div>
    </>}/>
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
  
    

export default EmailVerification
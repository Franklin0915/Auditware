import React from "react";
import styled from "styled-components";
import './signIn.css';
import slideImage from './assets/images/slide.png';
import { useNavigate } from 'react-router-dom'; 

function EmailVerification(){

    const [Code, setCode] = React.useState({ verificationCode: "" });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setLogin((prevForm) => ({
          ...prevForm,
          [name]: type === "checkbox" ? checked : value,
        }));
      }

    return(
        <div className="mainContainer">
        <div className="left">
          <div className="name">Auditware Pro</div>
          <div className="left-mid-block">
            <div className="m-1">
              <p>Email verification</p>
            </div>
            <div className="m-2">
              <small>enter the verification code sent to you email to continue</small>
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
              <SubmitButton onClick={toSignUp} >Continue</SubmitButton>
            </aside>
          </form>
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
  
    

export default EmailVerification
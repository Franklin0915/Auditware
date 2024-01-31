import React from "react";
import "./forgetPassword.css"
import slideImage from './assets/images/slide.png';
import styled from "styled-components";
import Wrapper from "./Components/Wrapper";

function ForgetPassword(){

    const[email,setEmail]=React.useState({email:""})

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setEmail((prevForm) => ({
          ...prevForm,
          [name]: type === "checkbox" ? checked : value,
        }));
      }

    return <Wrapper content={<>
      <div className="left-mid-block">
        <div className="m-1">
          <p>Forgot your password?</p>
        </div>
        <div className="m-2">
          Provide your email. A verification code will be sent to you
        </div>
        
      </div>
      <form>
        <div className="first-input">
          <label htmlFor="input-1">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={email.email}
            onChange={handleChange}
            id="input-1"
          />
        </div>
        
        <aside className="login-button">
          <SubmitButton >Continue</SubmitButton>
        </aside>
      </form>
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

export default ForgetPassword
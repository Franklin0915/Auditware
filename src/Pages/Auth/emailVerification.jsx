import React from "react";
import styled from "styled-components";
import './emailVerification.css';
import slideImage from './assets/images/slide.png';
import { useNavigate } from 'react-router-dom'; 
import Wrapper from "./Components/Wrapper";
import { LeftCover } from "./signIn";
import { LeftMidBlock } from "./signIn";
import { WelcomeBack } from "./signIn";
import { InputContainer } from "./signIn";
import { MainInput } from "./signIn";
import axiosInstance from "../../Service/axios";


function EmailVerification(){

    const [Code, setCode] = React.useState({ verificationCode: "" });
    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setCode((prevForm) => ({
          ...prevForm,
          [name]: type === "checkbox" ? checked : value,
        }));
      }

      const handleSubmit = async(event)=>{
        event.preventDefault()
        try{
          const res = await axiosInstance.post(`/login`, Code);
          console.log(res)
          
          setTimeout(() => {
           
            navigate('/auth-login',{
              state: {
                code: Code
              }
            });
          }, 500);
        }
        catch(error){
          
          console.log(error)
        }
      } 

    return  <Wrapper content={<>
      <LeftCover>
      <LeftMidBlock className="left-mid-block">
        <WelcomeBack className="m-1">
          <p>Email verification</p>
        </WelcomeBack>
        <div className="m-2">
          enter the verification code sent to you email to<br/> continue
        </div>
      
      </LeftMidBlock>
      <form>
        <InputContainer className="first-input">
          <label htmlFor="input-1">Verification code</label>
          <MainInput
            type="text"
            placeholder="xxxx-xxxx"
            name="verificationCode"
            value={Code.verificationCode}
            onChange={handleChange}
            id="input-1"
          />
        </InputContainer>
        
        <aside className="login-button">
          <SubmitButton onClick="" >Continue</SubmitButton>
        </aside>
      </form>
      <div className="v-code">Didn't receive a code?<a href="">Resend in 5:00</a></div>
      </LeftCover>
  
    </>}/>
  }
  
  export const SubmitButton = styled.button`
     width:430px;
     border-radius:12px;
     padding: 10px;
     border: 1px solid #ccc;
     color:white;
     background-color: #40ABA4;
     margom: 20px 0;

     @media only screen and (max-width 777px){
      width: 100%;
      margin: 20px 5px;
     }

     @media (max-width: 414px) {
      width: 340px;
      margin: 0 0 1rem 0;
    }

  `;
  
    

export default EmailVerification
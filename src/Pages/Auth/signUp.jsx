import React from "react";
import { GoogleButton, AppleButton, SubmitButton } from "./signIn";
import './signUp.css';
import styled from "styled-components";
import googleImage from './assets/images/google-image.png';
import appleImage from './assets/images/apple.png';
import slideImage from './assets/images/slide.png';
import { useNavigate } from 'react-router-dom'; 
import Wrapper from "./Components/Wrapper";
import { brand } from "../../Assets";
import { MainInput } from "./signIn";
import { InputContainer } from "./signIn";
import { LeftCover } from "./signIn";
import { WelcomeBack } from "./signIn";
import { LeftMidBlock } from "./signIn";



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
    <Wrapper content={<>
    <LeftCover>
    <LeftMidBlock className="left-mid-block">
            <WelcomeBack className="m-1">
              <p>Create an account</p>
            </WelcomeBack>
            <div className="m-2">
              Welcome! Create an account to get started
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
          </LeftMidBlock>
          <form>
            <NameField className="name-field">
              <Name className="f-name">
                <label htmlFor="first-name">First name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={SignUp.firstName}
                  onChange={handleChange}
                  id="first-name"
                />
              </Name>
              <Name className="l-name">
                <label htmlFor="second-name">Last name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={SignUp.lastName}
                  onChange={handleChange}  
                  id="second-name"        
                />
              </Name>
            </NameField>
            <InputContainer className="first-input">
              <label htmlFor="input-1">Email</label>
              <MainInput
                type="email"
                placeholder="Enter your email"
                name="email"
                value={SignUp.email}
                onChange={handleChange}
                id="input-1"
              />
            </InputContainer>
            <InputContainer className="second-input">
        <label htmlFor="input-2">Create a password</label>
        <MainInput
          type={showPassword ? "text" : "password"} 
          name="password"
          placeholder="Enter your password"
          value={SignUp.password}
          onChange={handleChange}
          id="input-2"
        />
        <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordVisibility}></i>
      
      </InputContainer>
            <aside className="login-button">
              <SubmitButton>Sign up</SubmitButton>
            </aside>
          </form>
          <div className="sign-in">Already have an account?<a href="#" onClick={toSignIn}>Sign in</a></div>
          <div className="terms">By signing up, you are confirming that you have read and agree with all
            <br/> our <a href="#">Terms and Conditions.</a>
          </div>

    </LeftCover>
    
    </>}/>
  );
}


export const Name = styled.div`

display: flex;
flex-direction: column;

label{
  display: flex;
}

input{
  width: 200px;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid #ccc;
}
#first-name{
  margin: 0 30px 0 0;
}

@media (max-width: 414px) {
 
  #first-name{
    margin: 0 4px 10px 0;
  }
    
}



`;

export const NameField = styled.div`
display: flex;
align-items: center;
margin: 1rem 0 10px 0;

@media (max-width: 414px) {
  display:flex;
  flex-direction:column;

    input{
      width:340px;
    }
}

`;



export default SignUp;

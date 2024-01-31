import React from "react";
import './reset.css';
import styled from "styled-components";
import { SubmitButton } from "./signIn";
import slideImage from './assets/images/slide.png';

function ResetPassword(){

    const[reset,setReset]=React.useState({Password:""})
    const [showPassword, setShowPassword] = React.useState(false);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setReset((prevForm) => ({
          ...prevForm,
          [name]: type === "checkbox" ? checked : value,
        }));
      }

      function togglePasswordVisibility() {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      }
    


    return(
<div className="mainContainer">
    <div className="left">
          <div className="name">Auditware Pro</div>
          <div className="left-mid-block">
            <div className="m-1">
              <p>Reset password</p>
            </div>
            <div className="m-2">
              Create a new password to log to your <br/>account.
            </div>
           
           
          </div>
          <form>
            
    
            
         <div className="second-input s-o">
        <label htmlFor="input-2">New password</label>
        <input
          type={showPassword ? "text" : "password"} // Use conditional rendering based on showPassword state
          name="password"
          placeholder="Enter new password"
          value={reset.password}
          onChange={handleChange}
          id="input-2"
        />
        <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordVisibility}></i>
      
        </div>
        <div className="second-input fa-drop ">
        <label htmlFor="input-2">Confirm new password</label>
        <input
          type={showPassword ? "text" : "password"} // Use conditional rendering based on showPassword state
          name="password"
          placeholder="Confirm new password"
          value={reset.password}
          onChange={handleChange}
          id="input-2"
        />
        <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordVisibility}></i>
      
         </div>
            <aside className="login-button">
              <SubmitButton>Reset password</SubmitButton>
            </aside>
          </form>

    
 </div>
        <div className="right">
          <img src={slideImage} alt="Slide Image" />
        </div>
</div>
    )
}
export default ResetPassword
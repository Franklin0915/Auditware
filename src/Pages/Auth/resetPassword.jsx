import React from "react";
import Wrapper from "./Components/Wrapper";
import { SubmitButton } from "./emailVerification";
import './reset.css'

function ResetPassword(){
    const [reset,setReset]=React.useState({password:""})
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
    

    return <Wrapper content={<>
       <div className="left-mid-block">
            <div className="m-1">
              <p>Reset password</p>
            </div>
            <div className="m-2">
              Create a new password to log in to your<br/> account
            </div>
           
          </div>
          <form>
        <div className="second-input s-o ">
            <label htmlFor="input-2">New password</label>
            <input
            type={showPassword ? "text" : "password"} // Use conditional rendering based on showPassword state
            name="password"
            placeholder="Enter your password"
            value={reset.password}
            onChange={handleChange}
            id="input-2"
            />
            <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordVisibility}></i>
      
      </div>

      <div className="second-input">
            <label htmlFor="input-2">Confirm new password</label>
            <input
            type={showPassword ? "text" : "password"} // Use conditional rendering based on showPassword state
            name="password"
            placeholder="Enter your password"
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

    
    </>}/>
}
export default ResetPassword
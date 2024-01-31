import React from "react";
import './payment.css';
import styled from "styled-components";
import { SubmitButton } from "./signIn";
import slideImage from './assets/images/slide.png';
import mastercard from './mastercard.svg'


function Payment(){

    const[payment,setPayment]=React.useState({cardName:"",cardNumber:"",expiryDate:"",CVV:""})


    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setPayment((prevForm) => ({
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
              <p>Add a payment method</p>
            </div>
            <div className="m-2">
              Add a payment method to your account.Billing would be made<br/>through this
              payment method based on your selected package.
            </div>
           
           
          </div>
          <form>
            
          <div className="second-input s-o">
        <label htmlFor="input-2">Card holder name</label>
        <input
          type="text"
          name="cardName"
          placeholder="Enter card holder name"
          value={payment.cardName}
          onChange={handleChange}
          id="input-2"
        />
        
      
        </div>
            
         <div className="second-input s-o">
        <label htmlFor="input-2">Card number</label>
        <input
          type="number"
          name="cardNumber"
          placeholder="xxxx-xxxx-xxxx-xxxx"
          value={payment.cardNumber}
          onChange={handleChange}
          id="input-2"
        />
        <img src={mastercard}/>
      
        </div>
      
         <div className="flex-inputs">
         <div className="second-input s-o">
        <label htmlFor="input-2">Expiry Date</label>
        <input
          type="text"
          name="expiryDate"
          placeholder="MM/YY"
          value={payment.expiryDate}
          onChange={handleChange}
          id="input-2"
        />
        
      
        </div>

        <div className="second-input s-o">
        <label htmlFor="input-2">CVV</label>
        <input
          type="number"
          name="CVV"
          placeholder=""
          value={payment.CVV}
          onChange={handleChange}
          id="input-2"
        />
        
      
        </div>

         </div>
            <aside className="login-button">
              <SubmitButton>Continue</SubmitButton>
            </aside>
          </form>

    
 </div>
        <div className="right">
          <img src={slideImage} alt="Slide Image" />
        </div>
</div>
    )
}
export default Payment
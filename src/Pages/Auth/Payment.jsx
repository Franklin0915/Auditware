import React from "react";
import Wrapper from "./Components/Wrapper";
import { SubmitButton } from "./signIn";
import './Payment.css'
import Mastercard from './assets/images/Mastercard.svg'
import exclamation from './assets/images/exclamation.svg'

function Payment(){

    const[payment,setPayment]= React.useState({cardName:"",cardNumber:"",expiryDate:"",CVV:""})


    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setPayment((prevForm) => ({
          ...prevForm,
          [name]: type === "checkbox" ? checked : value,
        }));
      }


    return <Wrapper content={<>
        <div className="left-mid-block">
            <div className="t-1">
              <p>Add a payment method</p>
            </div>
            <div className="t-2">
              Add a payment method for your account.Billing would be made <br/> through this payment method based on your selected package.
            </div>
           
            
          </div>
          <form>
            <div className="card-details">
              <div className="card-name">
                <label htmlFor="cardholder-name">Card holder name</label>
                <input
                  type="text"
                  placeholder="Enter card holder name"
                  name="cardName"
                  value={payment.cardName}
                  onChange={handleChange}
                  id="cardholder-name"
                />
              </div>
              <div className="l-name">
                <label htmlFor="second-name">Card number</label>
                <input
                  type="text"
                  placeholder="xxxx-xxxx-xxxx"
                  name="cardNumber"
                  value={payment.cardNumber}
                  onChange={handleChange}  
                  id="second-name"        
                />
              </div>
            </div>
            <div className="flex-input">

                    <div className="first-input">
                    <label htmlFor="input-1">Expiry Date</label>
                    <input
                        type="text"
                        placeholder="MM/YY"
                        name="expiryDate"
                        value={payment.expiryDate}
                        onChange={handleChange}
                        id="input-1"
                    />
                    </div>

                    <div className="second-input">
                    <label htmlFor="input-2">CVV</label> <label><img/></label>
                    <input
                        type="number"
                        placeholder=""
                        name="CVV"
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
         
    
    
    
    </>}/>
}
export default Payment
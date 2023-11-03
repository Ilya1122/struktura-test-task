import { memo } from "react"

import PaymentFormInput from "../PaymentFormInput"
import FormInputDetailsCart from "../../FormInputDetailsCart/FormInputDetailsCart"

import "./index.scss"
import FormInputICouponCode from "../../FormInputICouponCode"

const PaymentFormInputs = memo(() => (
  <div className="payment__inputs">
    <PaymentFormInput label="Email" placeholder="examplemail@mail.com" className="email" />

    <FormInputDetailsCart />
  
    <PaymentFormInput 
      label="Name on card" 
      placeholder="Enter cardholder name" 
      className="name" 
      // error="Error Required" 
    />

    <FormInputICouponCode />
  </div>
))

export default PaymentFormInputs

import ApplePayIcon from "../../assets/images/cib_apple-pay.svg"

import Button from "../ui/Button"
import PaymentFormInputs from "./PaymentFormInputs"
import PaymentFormOrMethod from "./PaymentFormOrMethod"
import PaymentFormSelectedMethod from "./PaymentFormSelectedMethod"

import "./index.scss"

const PaymentForm = () => {
  return (
    <form className="payment__form">
        <Button className="apple">
            <img src={ApplePayIcon} alt="applePay" />
        </Button>

        <PaymentFormOrMethod title="Or pay with card" />

        <PaymentFormInputs />

        <Button className="submit">
          Submit order
        </Button>

        <PaymentFormOrMethod title="Or alternative methods" />

        <PaymentFormSelectedMethod />
    </form>
  )
}

export default PaymentForm

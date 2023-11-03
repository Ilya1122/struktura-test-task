import MethodImage from "../../../assets/images/method.png"

import "./index.scss"

const PaymentFormSelectedMethod = () => {
  return (
    <div className="selected__method">
        <img className="method__icon" src={MethodImage} alt="method" />
    </div>
  )
}

export default PaymentFormSelectedMethod

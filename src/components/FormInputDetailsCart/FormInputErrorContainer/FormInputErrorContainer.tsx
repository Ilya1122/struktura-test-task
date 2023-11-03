import Carts from "../../../assets/images/creditCartInput.png"
import Input from "../../ui/Input"

import "./index.scss"

const FormInputErrorContainer = () => {
  return (
    <div className="input__error_wrapper">
        <label className="input__label">Card information</label>

        <div className="wrapper_credit__input">
            <Input placeholder="0000 0000 0000 0000" className="cart__input" />

            <img className="icon-carts" src={Carts} alt="carts" />
        </div>

        <div className="inputs__wrapper">
            <Input placeholder="MM/YYYY" />
            <Input placeholder="CVV" />
        </div>

        {/* <span className="input-error">Error Required</span> */}
    </div>
  )
}

export default FormInputErrorContainer

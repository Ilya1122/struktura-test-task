import LogoCarts from "../../../assets/images/logoCarts.png"

import "./index.scss"

const PaymentOrderDescription = () => (
    <div className="order__description__wrapper">
        <div className="text__automatic">Automatic Renewal: <span>ON</span></div>

        <p>
            By clicking “submit order” you agree to <a href="#">Terms of service</a> & <a href="#">Recurring Policy</a> as well as to <a href="#">Refund Policy</a> & <a href="#">Legal Disclaimer</a>.
        </p>

        <img className="logo__cart" src={LogoCarts} alt="cart" />
    </div>
)

export default PaymentOrderDescription

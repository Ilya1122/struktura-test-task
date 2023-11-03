import Feature from "../../../assets/images/fuature.png"
import PaymentFeatureList from "../PaymentFeatureList"

import "./index.scss"

const PaymentFeatureSection = () => (
    <div className="payment__feature">
        <img className="image" src={Feature} alt="feature" />

        <span className="title">You get all these features:</span>

        <PaymentFeatureList />
    </div>
  )

export default PaymentFeatureSection

import PaymentSteps from "../../components/PaymentSteps"
import PaymentDescriptionSection from "./PaymentDescriptionSection"
import PaymentFeatureSection from "./PaymentFeatureSection"
import PaymentOrderSection from "./PaymentOrderSection"

import "./index.scss"

const Payment = () => (
  <div className="payment__container">
    <PaymentSteps />

    <div className="payment__body">
      <PaymentFeatureSection />

      <div className="wrapper">
        <PaymentOrderSection />

        <PaymentDescriptionSection />
      </div>
    </div>
  </div>
)

export default Payment

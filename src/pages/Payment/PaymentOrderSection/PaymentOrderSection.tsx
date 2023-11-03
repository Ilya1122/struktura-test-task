import PaymentForm from "../../../components/PaymentForm"
import PaymentOrderDescription from "../PaymentOrderDescription"
import PaymentOrderTotals from "../PaymentOrderTotals"

import "./index.scss"

const PaymentOrderSection = () => (
  <div className="payment__order">
      <h3 className="order__title">Finish your order</h3>

      <PaymentOrderTotals />

      <PaymentForm />

      <PaymentOrderDescription />
  </div>
)

export default PaymentOrderSection

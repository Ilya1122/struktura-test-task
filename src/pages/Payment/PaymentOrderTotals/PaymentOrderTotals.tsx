import "./index.scss"

const PaymentOrderTotals = () => (
    <div className="order__total">
        <div className="total__wrapper">
            <span className="total__name">Plan</span>

            <span className="total__text">Full Pack</span>
        </div>

        <div className="total__wrapper">
            <span className="total__name">Subscription Period</span>

            <span className="total__text period">3 months</span>
        </div>

        <div className="total__wrapper">
            <span className="total__name">1 month price</span>

            <span className="total__text price">$ 29.99</span>
        </div>
    </div>
)

export default PaymentOrderTotals

import Confirmed from "../../assets/images/confirmed.svg"

import "./index.scss"

const PaymentSteps = () => (
    <div className="steps">
        <div className="steps__ellipse">
            <img src={Confirmed} className="Confirmed" alt="ellipse" />
        </div>

        <div className="steps__line" />

        <div className="steps__ellipse">
            <img src={Confirmed} className="Confirmed" alt="ellipse" />
        </div>

        <div className="steps__line" />

        <div className="steps__ellipse">
            <img src={Confirmed} className="Confirmed" alt="ellipse" />
        </div>

        <div className="steps__line" />

        <div className="steps__ellipse active">
            4
        </div>
    </div>
  )

export default PaymentSteps
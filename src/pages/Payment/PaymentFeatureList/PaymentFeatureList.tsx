import { features } from "../../../constants/feature"

import FeatureItem from "../../../components/FeatureItem"
import Like from "../../../assets/images/feature/like.svg"
import Apps from "../../../assets/images/feature/app.png"

import "./index.scss"

const PaymentFeatureList = () => (
    <ul className="feature__list">
        <li><FeatureItem title="Feature 1" image={Like} /></li>

        <li><img className="social" src={Apps} alt="social" /></li>

        {features.map(({ title, image }) => (
            <li key={title}>
                <FeatureItem title={title} image={image} />
            </li>
        ))}
    </ul>
)

export default PaymentFeatureList

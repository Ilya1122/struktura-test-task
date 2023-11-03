import { FC } from "react";
import "./index.scss"

interface Props {
    image: string;
    title: string;
}

const FeatureItem: FC<Props> = ({ image, title }) => (
    <div className="feature__item">
        <img src={image} alt="icon" />

        <span className="feature__title">{title}</span>
    </div>
  )

export default FeatureItem

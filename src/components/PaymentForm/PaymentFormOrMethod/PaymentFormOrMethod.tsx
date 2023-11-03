import { FC, memo } from "react"

import "./index.scss"

interface Props {
    title: string;
}

const PaymentFormOrMethod: FC<Props> = memo(({ title }) => (
    <div className="method__wrapper">
        <div className="line" />

        <span className="method__text">{title}</span>

        <div className="line" />
    </div>
))

export default PaymentFormOrMethod

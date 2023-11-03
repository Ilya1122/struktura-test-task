import { FC } from "react";
import Input from "../../ui/Input"

import "./index.scss"

interface Props {
    label: string;
    placeholder?: string;
    className?: string;
    error?: string;
}

const PaymentFormInput: FC<Props> = ({ label, error, ...rest }) => (
    <div className="input__wrapper">
        <label className="label">{label}</label>

        <Input {...rest} />

        {error && (
            <span className="error__message">{error}</span>
        )}
    </div>
)

export default PaymentFormInput

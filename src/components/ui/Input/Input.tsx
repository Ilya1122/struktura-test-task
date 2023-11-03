import { FC, memo } from "react";
import "./index.scss"

interface Props {
    placeholder?: string;
    className?: string;
}

const Input: FC<Props> = memo(({ className, ...rest }) => (
    <input className={`input ${className}`} {...rest} />
))

export default Input

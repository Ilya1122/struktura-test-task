import { FC } from "react"
import "./index.scss"

interface Props {
    options: { value: string | number, label: string }[]
}

const Select: FC<Props> = ({ options }) => (
    <select className="select">
        {options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
        ))}
    </select>
  )

export default Select

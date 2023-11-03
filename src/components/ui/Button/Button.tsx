import { FC, ReactNode, memo } from "react"

import "./index.scss"

interface Props {
    children: ReactNode;
    className?: string;
}

const Button: FC<Props> = memo(({ children, className }) => (
  <button className={`button ${className}`} type="button">
      {children}
  </button>
))

export default Button

import { memo, FC } from "react"
import { Link } from "react-router-dom"

import Logo from "../../assets/images/logo.svg"

import "./index.scss"

const Header: FC = () => (
  <header className="header">
    <div className="header__container">
      <Link to="/" className="header__logo">
          <img src={Logo} alt="logo" />
      </Link>
    </div>
  </header>
)

export default memo(Header)

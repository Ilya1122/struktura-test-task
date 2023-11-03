import { Link } from "react-router-dom"

import Logo from "../../../assets/images/logo.svg"

import FooterNavigation from "../FooterNavigation"

import "./index.scss"

const FooterTopSection = () => (
    <div className="footer__top">
        <div className="footer__wrapper">
            <Link to="/" className="header__logo">
                <img src={Logo} alt="logo" />
            </Link>

            <p className="top__text footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A massa scelerisque venenatis orci urna sed lobortis. Vitae cras augue orci cum scelerisque maecenas risus arcu. Gravida suscipit amet nullam augue vel, non amet pharetra elementum. Leo suspendisse amet condimentum eu gravida eu nisl. Iaculis ac turpis nibh mauris mollis cras faucibus gravida sit. </p>
        </div>

        <FooterNavigation />
    </div>
  )

export default FooterTopSection

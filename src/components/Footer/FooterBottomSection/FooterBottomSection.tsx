import { languageOptions, cartsImage } from "../../../constants/footer"

import Select from "../../ui/Select"

import "./index.scss"

const FooterBottomSection = () => (
    <div className="footer__bottom">
        <div className="footer__wrapper">
            <div className="wrapper__language">
                <Select options={languageOptions} />

                <a href="#" className="footer__text">Terms of service</a>
            </div>
            
            <span className="footer__text">© 2020 LOGO | All Rights Reserved.</span>
        </div>

        <div className="footer__wrapper">
            <span className="footer__text">Secure internet payments</span>

            <div className="wrapper__images">
                {cartsImage.map(({ image, key }) => (
                    <img src={image} alt="cart" key={key} />
                ))}
            </div>
        </div>
    </div>
  )

export default FooterBottomSection

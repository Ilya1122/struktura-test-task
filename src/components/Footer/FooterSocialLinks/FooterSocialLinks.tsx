import { socialLinks } from "../../../constants/footer"

import "./index.scss"

const FooterSocialLinks = () => (
    <div className="icons__list">
        <span className="footer__text">FOLLOW US</span>

        <ul className="list__social">
            {socialLinks.map(({ link, image }) => (
                <li key={link}>
                    <a href="#">
                        <img src={image} alt="icon" />
                    </a>
                </li>
            ))}
        </ul>
    </div>
)

export default FooterSocialLinks

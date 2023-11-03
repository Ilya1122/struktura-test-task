import { navLinksAboutUs, navLinksService, navLinksPartners } from "../../../constants/footer"

import FooterNavigationList from "../FooterNavigationList"
import FooterSocialLinks from "../FooterSocialLinks"

import "./index.scss"

const FooterNavigation = () => (
    <nav className="footer__nav">
        <FooterNavigationList title="ABOUT US" links={navLinksAboutUs} />

        <FooterNavigationList title="SERVICE LEGAL TERMS" links={navLinksService} />

        <FooterNavigationList title="PARTNERS" links={navLinksPartners} />

        <FooterSocialLinks />
    </nav>
)

export default FooterNavigation

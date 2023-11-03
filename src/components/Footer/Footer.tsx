import { memo } from "react"

import FooterBottomSection from "./FooterBottomSection"
import FooterTopSection from "./FooterTopSection"

import "./index.scss"

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <FooterTopSection />

      <FooterBottomSection />
    </div>
  </footer>
)

export default memo(Footer)


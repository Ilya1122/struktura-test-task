import { FC } from "react";

import "./index.scss"

interface Props {
    title: string;
    links: { label: string; path: string }[]
}

const FooterNavigationList: FC<Props> = ({ title, links }) => (
    <ul className="nav__list">
        <li className="footer__text">
            <a href="#" className="list__title">{title}</a>
        </li>

        {links.map(({ path, label }) => (
            <li key={label}>
                <a href={path} className="footer__text">{label}</a>
            </li>
        ))}
    </ul>
  )

export default FooterNavigationList

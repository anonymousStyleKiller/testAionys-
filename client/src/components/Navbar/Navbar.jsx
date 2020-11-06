import React from 'react';
import { NavLink }  from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "../Language";

const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav>
            <div className="container nav-wrapper">
                <span className="brand-logo">{t("Test")}</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink className="navigation" to="/notes">{t("CreateNote")}</NavLink></li>
                    <li><Language/></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
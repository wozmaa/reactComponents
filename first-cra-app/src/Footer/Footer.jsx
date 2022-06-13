import React from "react";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import css from "../Footer/footer.module.css"
import CopyRight from "./CopyRight";

function Footer() {
    return (
        <div className={css.footerMain}>
        <FooterLogo />
        <FooterMenu />
        <CopyRight />
        </div>
    )
}

export default Footer;
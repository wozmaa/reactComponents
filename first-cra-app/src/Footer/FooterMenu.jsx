import React from "react";
import css from "../Footer/footer.module.css"

function FooterMenu() {
    return (
        <div className={css.footerMenu}>
            <p>Партнерам</p>
            <p>Разработчикам</p>
            <p>Вакансии</p>
        </div>
    )
}

export default FooterMenu;
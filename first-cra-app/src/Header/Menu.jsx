import React from "react";
import css from "../Header/header.module.css";

function Menu() {
  return (
    <div className={css.headerMenu}>
      <p className={css.menuText}>Главная</p>
      <p className={css.menuText}>О нас</p>
      <p className={css.menuText}>Контакты</p>
    </div>
  );
}
export default Menu;

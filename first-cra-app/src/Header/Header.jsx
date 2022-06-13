import React from "react";
import Logo from "../Header/Logo";
import Menu from "./Menu";
import css from "./header.module.css"

function Header() {
  return (
    <div className={css.header}>
      <Logo />
      <Menu />
      </div>
  );
}

export default Header;

import React from "react";
import Buttons from "./Buttons";
import Numbers from "./Number";
import css from "../MainContent/main.module.css"

function Main (){
    return (
        <div className={css.main}>
        <Numbers />
        <Buttons />
        </div>
    )
}

export default Main;
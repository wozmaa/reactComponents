import React from "react";
import css from "../MainContent/main.module.css"

function Buttons (){
    return <div className={css.buttons}>
        <button className={css.button1}>Увеличить</button>
        <button className={css.button2}>Уменьшить</button>
        <button className={css.button3}>Сбросить</button>
    </div>
}

export default Buttons;
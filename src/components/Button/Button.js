import React from "react";
import './Button.scss';


const Button = (props) => {
    return(
        <button className={`btn btn__${props.type}`} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button;
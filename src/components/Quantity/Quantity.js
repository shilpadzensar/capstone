import React, { useState } from "react";

import "./Quantity.scss";

const Quantity = (props) => {

    let textInput = React.createRef();

    let [num, setQuantity] = useState(props.total);

    let increaseQuantity = () => {
        if (num < 10) {
        setQuantity(Number(num) + 1);
        props.total(num);
        }
    };

    let decreaseQuantity = () => {
        if (num > 0) {
        setQuantity(num - 1);
        props.total(num);
        }
    }

    let handleChange = (e) => {
        setQuantity(e.target.value);
        props.total(num);
    }

    return ( 
        <div className="quantity__wrapper">
            <span className="--minus" onClick={decreaseQuantity}></span>
            <input ref={textInput} type="text" className="--quantity" value={num} onChange={handleChange} />
            <span className="--plus" onClick={increaseQuantity}></span>
        </div>
    );
}


export default Quantity;
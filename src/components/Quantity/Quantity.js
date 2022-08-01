import React from "react";

import "./Quantity.scss";

const Quantity = (props) => {
    
    const handleChange = (num) => {
        num = Math.round(num);
        num = num > 10 ? 10 : num;        
        props.updateQuantity(num);
    }

    return (
        <div className="quantity__wrapper">
            <span className="--minus" onClick={()=> props.quantity > 1 && handleChange(props.quantity - 1)}></span>
            <input type="text" className="--quantity" value={props.quantity} onChange={(e)=> handleChange(e.target.value)} />
            <span className="--plus" onClick={()=> handleChange(props.quantity + 1)}></span>
        </div>
    );
}


export default Quantity;
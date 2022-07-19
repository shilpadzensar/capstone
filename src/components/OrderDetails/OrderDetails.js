import React from "react";
import { useSelector } from "react-redux";
import './OrderDetails.scss';


const OrderDetails = (prop) => {
    let cart = useSelector((state) => state.cart.cart);

    const renderList = cart.map((product) => {
        return (           
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                
                    <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--4">
                            <img src={product.image} alt={product.title}></img>
                        </div>
                        <div className="product__details aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--8">
                            <label className="product__name">{product.title}</label><br/>                            
                            <label>Size: Medium</label><br/>
                            <label>Color: Storm</label><br/>
                            <label>Quantity: {product.quantity}</label>
                        </div>
                    </div>
                </div>           
        );
    });
    return <>
            {cart.length ? 
            <div className={`${prop.border} order-summary`}>
            <h4>{cart.length} items in your order</h4>       
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                    {renderList}
                </div>
            </div> : '' }
            </>;   

};


export default OrderDetails;
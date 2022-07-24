import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Quantity from "./../Quantity/Quantity";
import Accordion from "../Accordion/Accordion";
import PricingSummary from "../PricingSummary/PricingSummary";
import { removeSelectedProduct } from "../../redux/actions/productsActions";

import './ShoppingBag.scss';
import Edit from './images/edit-2.svg';
import Trash from './images/trash-2.svg';
import Heart from './images/heart.svg';

const ShoppingBag = () => {
  
    const dispatch = useDispatch();
    let cart = useSelector((state) => state.cart.cart);

    const removeCartItem = (id) => {
        dispatch(removeSelectedProduct(id));
    }    
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/checkout'; 
        navigate(path);
    }
   
    const RenderList = (product) => {      

        return (
            <section>
                <div key={product.id} className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                    <div className="prod__details aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                        <img src={product.image} alt={product.title}></img>
                        <div>
                            <h5>{product.title}</h5>
                            <p>Size: Medium</p>
                            <p>Color: Storm</p>
                            <p>Price: {product.price}</p>
                        </div>
                    </div>

                    <div className="prod__quantity aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                        <section>
                            <Quantity total={product.quantity} />
                        </section>

                        <ul className="show__lg">
                            <li>
                                <Link to={`/product/${product.id}`} ><img src={Edit} alt="edit" /> Edit item </Link>
                            </li>
                            <li onClick={() => removeCartItem(product.id)}>
                                <img src={Trash} alt="remove" /> Remove
                            </li>
                            <li>
                                <img src={Heart} alt="add to whishlist" /> Save for later
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    };


    return (
        cart.length == 0 ? <h1 className="no__record">No product in Cart</h1> :

        <div className="shoppingbag">
            <h1>Your Shopping Bag </h1>
            <hr/>
            
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className="left__col aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--1">
                        {cart.map(RenderList)}

                        <Accordion />

                </div>
                <div className="right__col aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
                    <PricingSummary border="false" />

                    <section>
                        <button className="primary__btn"  onClick={routeChange}>checkout</button>
                    </section>
                    <section>
                        <button className="primary__paypal__btn"></button>
                    </section>
                </div>
            </div>            
        </div>
    );
};

export default ShoppingBag;


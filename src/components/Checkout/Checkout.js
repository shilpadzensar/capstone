import React from "react";
import { useSelector } from "react-redux";
import './Checkout.scss';
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import PricingSummary from "../PricingSummary/PricingSummary";
import ContactInformation from "../ContactInformation/ContactInformation";
import ShippingMethod from "../ShippingMethod/ShippingMethod";
import PaymentInformation from "../PaymentInformation/PaymentInformation";
import OrderDetails from './../../components/OrderDetails/OrderDetails';


const Checkout = () => {   

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/order'; 
        navigate(path);
    }


    let checkoutState = useSelector((state) => state.checkout.checkoutState);
    
    const PLACEORDER = (!checkoutState.contactInfo && !checkoutState.shippingInfo && !checkoutState.paymentInfo) ? true : false;
    
    return (

        <div className="container checkout">
            <h1>Checkout</h1>
            <hr />
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className="left__col aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--1">
                    <ContactInformation />

                    <ShippingMethod />

                    <PaymentInformation />

                    {PLACEORDER ?
                    <OrderDetails border="grey__border" />
                    : '' }

                </div>

                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
                    <section className="sign__in aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                            Sign in for Express Checkout
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                            <Button type="secondary">Sign in</Button>
                        </div>
                    </section>

                    <PricingSummary border="border--summary" />

                </div>

                {PLACEORDER ?
                <div className="place__order text__center aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--1">
                    <Button type="primary" onClick={routeChange}>Place order</Button>                  
                    <p>By clicking confirm order you agree to our <a href="#">Terms and Conditions</a></p>
                </div> : '' }
            </div>
        </div>
    );
};

export default Checkout;


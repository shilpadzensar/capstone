import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './ShippingMethod.scss';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { updateCheckoutState, updateShippingInfo } from "../../redux/actions/checkoutActions";

import Edit from '../../assets/images/edit-blue.svg';


const ShippingMethod = () => {

    const [shippingData, setShippingData] = useState({});
    let checkoutState = useSelector((state) => state.checkout.checkoutState);
    const dispatch = useDispatch();

    useEffect(() => {

    }, [checkoutState]);


    let contactState = checkoutState.contactInfo;
    let shippingState = checkoutState.shippingInfo;
   
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        let updateState = {
            contactInfo: false,
            shippingInfo: false,
            paymentInfo: true
        };

        setShippingData(data);
        dispatch(updateShippingInfo(data));
        dispatch(updateCheckoutState(updateState));
    };

    
    const EditBlock = () => (

        <form className="shipping__edit" onSubmit={handleSubmit(onSubmit)}>
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--1">
                    <h3>2. Shipping Method</h3>
                </div>

                <section className="shipping__methods">
                    <div className="radio-wrapper aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--1">
                        <input
                            {...register('shippingMethod', { required: true })}
                            type="radio"
                            name="shippingMethod"
                            value="Standard Shipping (4-8 business days via USPS) FREE"
                            id="standard"
                        />
                        <label htmlFor="standard"> Standard Shipping (4-8 business days via USPS) FREE</label>
                    </div>
                    <div className="radio-wrapper aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--1">
                        <input
                            {...register('shippingMethod', { required: true })}
                            type="radio"
                            name="shippingMethod"
                            value="Express Delivery (2-5 business days via USPS) $17.95"
                            id="express"
                        />
                        <label htmlFor="express">Express Delivery (2-5 business days via USPS) $17.95</label>
                    </div>
                    <div className="radio-wrapper aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--1">
                        <input
                            {...register('shippingMethod', { required: true })}
                            type="radio"
                            name="shippingMethod"
                            value="Next Day Delivery (Next business days via FedEx) $53.61"
                            id="nextDay"
                        />
                        <label htmlFor="nextDay">Next Day Delivery (Next business days via FedEx) $53.61</label>
                    </div>
                </section>

                <div className="show__xs submit__button aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                    <Button type="secondary" >Continue</Button>
                </div>
                <div className="show__lg submit__button aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                    <Button type="secondary" >Continue to Payment</Button>
                </div>
            </div>
        </form>
    );

    const DetailBlock = ({data}) => (
        <section className="shipping__detail">
            <div>
                <span>Shipping Method</span>
                <Link to='' className="show__lg"><img src={Edit} alt="edit" />Edit</Link>
                <Link to='' className="show__xs"><img src={Edit} alt="edit" /></Link>
            </div>

            <section>{data.shippingMethod}</section>

        </section>
    );

   
    return (
        <div className="shipping-method">
            {contactState ? 
                <div className="checkout__head">
                    2. Shipping Method
                </div>  
            :
            shippingState ? <EditBlock /> : <DetailBlock data={shippingData}/>}             

        </div>
    );
};

export default ShippingMethod;
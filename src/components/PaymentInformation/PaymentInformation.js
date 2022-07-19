import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { updateCheckoutState, updatePaymentInfo } from "../../redux/actions/checkoutActions";
import './PaymentInformation.scss';
import Input from "../Input/Input";
import Button from "../Button/Button";
import Edit from '../../assets/images/edit-blue.svg';

const COL__12 = "aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--1";
const PaymentInformation = () => {

    const [shippingData, setShippingData] = useState({});
    let checkoutState = useSelector((state) => state.checkout.checkoutState);
    const dispatch = useDispatch();

    useEffect(() => {

    }, [checkoutState]);


    let contactState = checkoutState.contactInfo;
    let shippingState = checkoutState.shippingInfo;
    let paymentState = checkoutState.paymentInfo;



    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        let updateState = {
            contactInfo: false,
            shippingInfo: false,
            paymentInfo: false
        };


        setShippingData(data);
        dispatch(updatePaymentInfo(data));
        dispatch(updateCheckoutState(updateState));
    };

    const EditBlock = () => (
        <form className="payment__edit" onSubmit={handleSubmit(onSubmit)}>
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className={COL__12}>
                    <h3>3. Payment Information</h3>
                </div>

                <div className={`radio__wrapper ${COL__12}`}>
                    <input
                        {...register('paymentCard', { required: true })}
                        type="radio"
                        name="paymentCard"
                        value="Credit"
                        id="credit-card"
                    />
                    <label htmlFor="paymentCard"> Credit Card</label>
                </div>

                <div className={COL__12}>
                    <Input label="Name on Card" {...register('cname', {required:{value: false}})}  />
                </div>

                <div className={COL__12}>
                    <Input label="Credit Card Number" {...register('cnumber', {required:{value: false}})}  />
                </div>

                <div className={COL__12}>
                    <Input label="Expiration Date" {...register('exdate', {required:{value: false}})}  />
                </div>

                <div className={COL__12}>
                    <Input label="CVV" {...register('cvv', {required:{value: false}})}  />
                </div>

                <div className={`checkbox__wrapper ${COL__12}`}>
                    <input name="sameAddress" type="checkbox" {...register('sameAddress')} id="sameAddress" />
                    <label htmlFor="sameAddress" >Billing address same as shipping address</label>
                </div>

                <hr />

                <div className={`radio__wrapper ${COL__12}`}>
                    <input
                        {...register('paymentCard', { required: true })}
                        type="radio"
                        name="paymentCard"
                        value="PayPal"
                        id="pay-pal"
                    />
                    <label htmlFor="pay-pal"> PayPal</label>
                </div>

                <hr />

                <div className="show__xs submit__button aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                    <Button type="secondary" >Continue</Button>
                </div>
                <div className="show__lg submit__button aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                    <Button type="secondary" >Continue to review order</Button>
                </div>

            </div>
        </form>
    );


    const DetailBlock = ({data}) => (
        <section className="payment__detail">
            <div>
                <span>Payment Information</span>
                <Link to='' className="show__lg"><img src={Edit} alt="edit" />Edit</Link>
                <Link to='' className="show__xs"><img src={Edit} alt="edit" /></Link>
            </div>
            <section>
                Credit Card Visa ending in {data.cnumber}
            </section>
        </section>
    );

    return (
        <div className="payment-information">
            {contactState || shippingState ? 
                <div className="checkout__head">
                    3. Payment Information
                </div>
            : paymentState ? <EditBlock /> : <DetailBlock data={shippingData} />}
        </div>
    );
};

export default PaymentInformation;
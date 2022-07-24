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

    let [toggle, setToggle] = useState(true);
    let [paymentMethod, setPaymentMethod] = useState(false);
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

        setToggle(!toggle);
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
                        onClick={() => setPaymentMethod(!paymentMethod)}
                        {...register('paymentCard',
                        { required: "This is a required field." })}
                        type="radio"
                        name="paymentCard"
                        value="Credit"
                        id="creditcard"
                    />
                    <label htmlFor="creditcard"> Credit Card</label>
                </div>

                {paymentMethod ?
                    <div>
                        <div className={COL__12}>
                            <Input label="Name on Card"
                                {...register('cname', {
                                    required: "This is a required field.",
                                    pattern: {
                                        value: /^[a-zA-Z ]{2,30}$/,
                                        message: 'Please enter valid name.'
                                    }
                                })} 
                                className={errors.cname && 'error--border'} />
                            <p className="error--msg">{errors.cname && errors.cname.message}</p>
                        </div>

                        <div className={COL__12}>
                            <Input label="Credit Card Number"
                                {...register('cnumber', {
                                    required: "This is a required field.",
                                    pattern: {
                                        value: /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
                                        message: 'Enter Valid Card Number(16 Digits)'
                                    }
                                })}
                                placeholder="#### #### #### ####" 
                                className={errors.cnumber && 'error--border'} />
                            <p className="error--msg">{errors.cnumber && errors.cnumber.message}</p>
                        </div>

                        <div className={COL__12}>
                            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
                                    <Input type="date" label="Expiration Date"
                                        {...register('exdate',
                                        { required: "This is a required field.",})}
                                        className={errors.exdate && 'error--border'} 
                                    />
                                    <p className="error--msg">{errors.exdate && errors.exdate.message}</p>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
                                    <Input label="CVV" {...register('cvv',
                                        {
                                            required: "This is a required field.",
                                            pattern: {
                                                value: /^\(?([0-9]{3})$/,
                                                message: 'Please enter valid CVV(3 Digits).'
                                            }
                                        })} 
                                        className={errors.cvv && 'error--border'} />
                                    <p className="error--msg">{errors.cvv && errors.cvv.message}</p>
                                </div>
                            </div>
                        </div>


                        <div className={`checkbox__wrapper ${COL__12}`}>
                            <input name="sameAddress" type="checkbox" {...register('sameAddress')} id="sameAddress" />
                            <label htmlFor="sameAddress" >Billing address same as shipping address</label>
                        </div>
                    </div>

                    : ''}

                <div className={`radio__wrapper ${COL__12}`}>
                    <input
                        onClick={() => setPaymentMethod(false)}
                        {...register('paymentCard', { required: true })}
                        type="radio"
                        name="paymentCard"
                        value="PayPal"
                        id="paypal"
                    />
                    <label htmlFor="paypal"> PayPal</label>
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


    const DetailBlock = ({ data }) => (
        <section className="payment__detail">
            <div>
                <span>Payment Information</span>
                <Link to='' className="show__lg" onClick={() => setToggle(!toggle)}><img src={Edit} alt="edit" />Edit</Link>
                <Link to='' className="show__xs" onClick={() => setToggle(!toggle)}><img src={Edit} alt="edit" /></Link>
            </div>
            <section>
                Credit Card Visa Number - {data.cnumber}
            </section>
        </section>
    );

    return (
        <div className="payment-information">
            {contactState || shippingState ?
                <div className="checkout__head">
                    3. Payment Information
                </div>
                : toggle || paymentState ? <EditBlock /> : <DetailBlock data={shippingData} />}
        </div>
    );
};

export default PaymentInformation;
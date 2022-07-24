import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import './ContactInformation.scss';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { updateCheckoutState, updateContactInfo } from "../../redux/actions/checkoutActions";

import Input from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import Countries from "../../utils/countries";
import State from "../../utils/states";
import Edit from '../../assets/images/edit-blue.svg';


const COL__12 = "aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--1";
const COL__6 = "aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1";
const ContactInformation = () => {

    let [toggle, setToggle] = useState(true);
    const [contactData, setContactData] = useState({});
    let contactState = useSelector((state) => state.checkout.checkoutState.contactInfo);
    const dispatch = useDispatch();

    useEffect(() => {
    }, [contactState])


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        let checkoutState = {
            contactInfo: false,
            shippingInfo: true,
            paymentInfo: false
        };

        setToggle(!toggle);
        setContactData(data);
        dispatch(updateContactInfo(data));
        dispatch(updateCheckoutState(checkoutState));
    };

    const EditBlock = () => (
        <form className="shipping__edit" onSubmit={handleSubmit(onSubmit)}>

            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className={COL__12}>
                    <h2>Guest Checkout</h2>
                </div>
                <div className={COL__12}>
                    <h3>Contact information</h3>
                </div>
                <div className={COL__12}>
                    <p>We’ll use these details to keep you informed on your delivery.</p>
                </div>
            </div>

            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className={COL__6}>
                    <Input label="Email"
                        {...register("email", {
                            required: "This is a required field.",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: 'Please enter valid email address.'
                            }
                        })}
                        placeholder="abc@xyz.com" className={errors.email && 'error--border'} />
                    <p className="error--msg">{errors.email && errors.email.message}</p>
                </div>

                <div className={COL__6}>
                    <Input label="Phone Number" {...register('phone',
                        {
                            required: "This is a required field.",
                            pattern: {
                                value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                                message: 'Please enter valid phone number.'
                            }
                        })} placeholder="222 222 2222" className={errors.phone && 'error--border'} />
                    <p className="error--msg">{errors.phone && errors.phone.message}</p>
                </div>

                <div className={COL__12}>
                    <h3>1. Shipping Information</h3>
                </div>
            </div>

            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className={COL__6}>
                    <Dropdown label="Country" placeholder="Select Country" list={Countries} {...register("Country", {
                        required: "This is a required field."
                    })} className={errors.Country && 'error--border'} />
                </div>
            </div>


            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className={COL__6}>
                    <Input label="First Name"
                        {...register('fname', { required: "This is a required field." })}
                        className={errors.fname && 'error--border'} />
                    <p className="error--msg">{errors.fname && errors.fname.message}</p>
                </div>

                <div className={COL__6}>
                    <Input label="Last Name"
                        {...register('lname', { required: "This is a required field." })}
                        className={errors.lname && 'error--border'} />
                    <p className="error--msg">{errors.lname && errors.lname.message}</p>
                </div>

                <div className={COL__6}>
                    <Input label="Street Address"
                        {...register('address1', { required: "This is a required field." })}
                        className={errors.address1 && 'error--border'} />
                    <p className="error--msg">{errors.address1 && errors.address1.message}</p>
                </div>

                <div className={COL__6}>
                    <Input label="Street Address2"
                        {...register('address2', { required: { value: false } })}
                        className={errors.address2 && 'error--border'} />
                    <p className="error--msg">{errors.address2 && errors.address2.message}</p>
                </div>

                <div className={COL__6}>
                    <Input label="City"
                        {...register('city', { required: "This is a required field." })}
                        className={errors.city && 'error--border'} />
                    <p className="error--msg">{errors.city && errors.city.message}</p>
                </div>

                <div className={COL__6}>
                    <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                        <div className={COL__6}>
                            <Dropdown label="State" placeholder="Select State" list={State}
                                {...register("State")}
                                className={errors.State && 'error--border'} />
                            <p className="error--msg">{errors.State && errors.State.message}</p>
                        </div>

                        <div className={COL__6}>
                            <Input label="ZIP"
                                {...register('zip', { required: "This is a required field.", 
                                pattern: {
                                    value: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
                                    message: 'Please enter valid zip code.'
                                } })}
                                className={errors.zip && 'error--border'} />
                            <p className="error--msg">{errors.zip && errors.zip.message}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="show__xs submit__button aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <Button type="secondary" >Continue</Button>
            </div>
            <div className="show__lg submit__button aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <Button type="secondary" >Continue to shopping method</Button>
            </div>
        </form>
    )

    const DetailBlock = ({ data }) => (
        <section className="shipping__detail">
            <div>
                <span>Shipping Information</span>
                <Link to='' className="show__lg" onClick={() => setToggle(!toggle)}><img src={Edit} alt="edit" />Edit</Link>
                <Link to='' className="show__xs" onClick={() => setToggle(!toggle)}><img src={Edit} alt="edit" /></Link>
            </div>

            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className="shipping__contact aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
                    <section>{data.email}<br />{data.phone}</section>
                </div>
                <div className="shipping__address aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
                    <section>{data.address1} {data.address2}, {data.city} {data.State} {data.zip} {data.Country}</section>
                </div>
            </div>
        </section>
    )

    return (
        <div className="contact-information">
            {toggle || contactState ? <EditBlock /> : <DetailBlock data={contactData} />}
        </div>
    );
};

export default ContactInformation;
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import './ContactInformation.scss';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { updateCheckoutState, updateContactInfo } from "../../redux/actions/checkoutActions";

import Input from "../Input/Input";
import Select from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import Countries from "../../utils/countries";
import State from "../../utils/states";
import Edit from '../../assets/images/edit-blue.svg';


const COL__12 = "aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--1";
const COL__6 = "aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1";
const ContactInformation = () => {
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
                    {...register('email', {required:{value: true, message: 'This is a required field.'}})} 
                    placeholder="abc@xyz.com" />
                </div>

                <div className={COL__6}>
                    <Input label="Phone Number" {...register('phone', {required:{value: true}})} placeholder="(222) 222-2222" />
                </div>

                <div className={COL__12}>
                    <h3>1. Shipping Information</h3>
                </div>
            </div>

            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className={COL__6}>
                    <Select label="Country" placeholder="Select Country" list={Countries} {...register("Country")} />
                </div>
            </div>


            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className={COL__6}>
                    <Input label="First Name" {...register('fname', {required:{value: true}})} />
                </div>

                <div className={COL__6}>
                    <Input label="Last Name" {...register('lname', {required:{value: true}})} />
                </div>

                <div className={COL__6}>
                    <Input label="Street Address" {...register('address1', {required:{value: true}})} />
                </div>

                <div className={COL__6}>
                    <Input label="Street Address2" {...register('address2', {required:{value: false}})} />
                </div>

                <div className={COL__6}>
                    <Input label="City" {...register('city', {required:{value: true}})} />
                </div>

                <div className={COL__6}>
                    <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                        <div className={COL__6}>
                            <Select label="State" placeholder="Select State" list={State} {...register("State")} />
                        </div>

                        <div className={COL__6}>
                            <Input label="ZIP" {...register('zip', {required:{value: true}})} />
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

    const DetailBlock = ({data}) => (
        <section className="shipping__detail">
            <div>
                <span>Shipping Information</span>
                <Link to='' className="show__lg"><img src={Edit} alt="edit" />Edit</Link>
                <Link to='' className="show__xs"><img src={Edit} alt="edit" /></Link>
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
            {contactState ? <EditBlock /> : <DetailBlock data={contactData}/>}
        </div>
    );
};

export default ContactInformation;
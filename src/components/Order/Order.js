import React from "react";
import { useSelector } from "react-redux";
import './Order.scss';
import OrderDetails from './../../components/OrderDetails/OrderDetails';
import { ReactComponent as Instagram } from './images/instagram.svg';
import { ReactComponent as Facebook } from './images/facebook.svg';
import { ReactComponent as Twitter } from './images/twitter.svg';



const Order = () => {

    let contactInformation = useSelector((state) => state.checkout.contactInformation);
    let shippingInformation = useSelector((state) => state.checkout.shippingMethod);
    let paymentInformation = useSelector((state) => state.checkout.paymentInformation);

    return (
        <div className="container order">
            <h1>Order Successful!</h1>
            <hr />

            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className="order__details aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--1">
                    <h2>Order Number #1700834</h2>

                    <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                            <h3>Shipping Information</h3>
                            <p>{contactInformation.email}
                                {contactInformation.phone}
                            </p>
                            <p>
                            {contactInformation.address1} {contactInformation.address2}, {contactInformation.city} {contactInformation.State} {contactInformation.zip} {contactInformation.Country}
                            </p>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                            <h3>Shipping Method</h3>
                            <p>{shippingInformation.shippingMethod}</p>

                            <h3>Payment Information</h3>
                            <p>Credit Card Visa ending in {paymentInformation.cnumber}</p>
                        </div>

                    </div>

                    <OrderDetails />

                    <article>
                        <p>
                            You will also receive an email with the details and we will let you know when your order has shipped.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.
                        </p>

                    </article>

                </div>

                <div className="adds__section aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
                    <section className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--1">
                            <div>Give us a follow to SAVE 20% on your next order.</div>
                            <div className='social__links'>
                                <Instagram />
                                <Facebook />
                                <Twitter />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Order;
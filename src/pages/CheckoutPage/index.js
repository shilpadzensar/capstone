import React, { Component } from 'react';
import Checkout from './../../components/Checkout/Checkout';
import Spacer from './../../components/Spacer/Spacer';


class CheckoutPage extends Component {

    render() {
        return (
            <main>
                <section>
                    <Checkout />

                    <Spacer color="#ffffff" mobileHeight="64px" desktopHeight="80px" />
                </section>                
            </main>
        );
    }

}

export default CheckoutPage;
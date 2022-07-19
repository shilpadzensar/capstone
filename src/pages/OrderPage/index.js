import React, { Component } from 'react';
import Order from './../../components/Order/Order';
import Spacer from './../../components/Spacer/Spacer';


class OrderPage extends Component {

    render() {
        return (
            <main>
                <section>
                    <Order />

                    <Spacer color="#ffffff" mobileHeight="40px" desktopHeight="80px" />

                </section>                
            </main>
        );
    }

}

export default OrderPage;
import React, { Component } from 'react';
import ShoppingBag from './../../components/ShoppingBag/ShoppingBag';

class CartPage extends Component {

    render() {
        return (
            <main className="container">
                <section>
                    <ShoppingBag />
                </section>                
            </main>
        );
    }

}

export default CartPage;
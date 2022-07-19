import React, { Component } from 'react';
import Product from './../../components/Product/Product';
import Breadcrumb from './../../components/Breadcrumb/Breadcrumb';



class ProductPage extends Component {

    render() {
        return (
            <main className="container">
            <section>
                <Breadcrumb />
            </section>

            <section>
                 <Product />  
           </section>
        </main>
        );
    }
}

export default ProductPage;
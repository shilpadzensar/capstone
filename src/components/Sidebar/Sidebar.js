import React from "react";
import './Sidebar.scss';
import Filter from '../Filter/Filter';


const CATEGORIES = [
    { id:"jewelery", name: 'Jewelery'},
    { id:"electronics", name: 'Electronics'},
    { id:"men", name: 'Men\' Clothing'},
    { id:"women", name: 'Women\' Clothing'}
];


const Sidebar = () => {
    return (
        <section className="sidebar">
                <h4>Filters</h4>

                <Filter filterArray={CATEGORIES} title="Categories"/>

            </section>
    );    
}

export default Sidebar;
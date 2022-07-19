import React from "react";
import './Sidebar.scss';
import Filter from '../Filter/Filter';


const sizeArr = [
    { id: 1, name: 'Jewellery'},
    { id: 2, name: 'Electronics'},
    { id: 3, name: 'Men\' Clothing'},
    { id: 4, name: 'Women\' Clothing'}
];


const Sidebar = () => {
    return (
        <section className="sidebar">
                <h4>Filters</h4>

                <Filter filterArray={sizeArr} title="Categories"/>

            </section>
    );    
}

export default Sidebar;
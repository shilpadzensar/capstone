import React from "react";
import './Sidebar.scss';
import Filter from '../Filter/Filter';


const sizeArr = [
    { id: 1, name: 'Jewelery', redirect:"jewelery"},
    { id: 2, name: 'Electronics', redirect:"electronics"},
    { id: 3, name: 'Men\' Clothing',  redirect:"men"},
    { id: 4, name: 'Women\' Clothing', redirect:"women",}
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
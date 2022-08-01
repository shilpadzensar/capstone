import React from 'react';
import {NavLink} from 'react-router-dom';
import './Breadcrumb.scss';

function Breadcrumb() {

    return (
        <div className="breadcrumb-wrapper">
            <ul className="breadcrumb__list">
                <li><NavLink to="/product/category/all">Clothing</NavLink></li>
                <li><NavLink to="product/category/women">Women's</NavLink></li>
                <li>Outerwear</li>
            </ul>
        </div>
    );
}

export default Breadcrumb;
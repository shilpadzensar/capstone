import React from 'react';
import './Breadcrumb.scss';

function Breadcrumb() {

    return (
        <div className="breadcrumb-wrapper">
            <ul className="breadcrumb__list">
                <li><a href="#">Clothing</a></li>
                <li><a href="#">Women's</a></li>
                <li>Outerwear</li>
            </ul>
        </div>
    );
}

export default Breadcrumb;
import React from "react";
import {Link} from 'react-router-dom';
import "./Tiles.scss";

const CATEGORIES = [
    { id:1, label: "Shop Women", redirect:"women", description: "Newly Launched Up to 50% off", altText: "shop Women", img: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" },
    { id:2, label: "Shop Men",  redirect:"men", description: "Premium casuals Up to 60% off", altText: "shop Men", img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
    { id:3, label: "Jewelery", redirect:"jewelery", description: "Buy 2 or get more EXTRA", altText: "Jewellery", img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" },
    { id:4, label: "Electronics", redirect:"electronics", description: "Mega Electronics Days", altText: "Electronics", img: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" },
]

function Tiles() {

    return (
        <div className="container tiles-wrapper">
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">

                {CATEGORIES?.map((data) => {
                    return (
                         <div key={data.id} className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
                            <Link to={`/product/category/${data.redirect}`} aria-label="go to venia home page" alt="logo">
                            <div className="img--hover--zoom">
                            <img src={data.img} alt={data.altText} />
                            </div>
                            <div className="__tile">
                            <article>
                                <h3>{data.label}</h3>
                                <p>{data.description}</p>
                            </article>
                            <hr/>
                            </div>
                            </Link>
                        </div>
                    );
                })}
                
            </div>
        </div>
    );

}

export default Tiles;
import React from "react";
import "./Tiles.scss";


const CATEGORIES = [
    { id:1, label: "Shop Women", description: "Lorem ipsum dolor sit amet", altText: "shop Women", img: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" },
    { id:2, label: "Shop Men", description: "Lorem ipsum dolor sit amet", altText: "shop Men", img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
    { id:3, label: "Jewellery", description: "Lorem ipsum dolor sit amet", altText: "Jewellery", img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" },
    { id:4, label: "Electronics", description: "Lorem ipsum dolor sit amet", altText: "Electronics", img: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" },
]

function Tiles() {

    return (
        <div className="container tiles-wrapper">
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">

                {CATEGORIES?.map((data) => {
                    return (
                         <div key={data.id} className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
                            <img src={data.img} alt={data.altText} />
                            <div className="tile">
                            <article>
                                <h3>{data.label}</h3>
                                <p>{data.description}</p>
                            </article>
                            <hr/>
                            </div>
                        </div>
                    );
                })}
                
            </div>
        </div>
    );

}

export default Tiles;
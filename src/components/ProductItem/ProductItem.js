import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ProductItem.scss';

const ProductItem = (prop) => {
  const [likeArray, updateLikeArray] = useState([]);

  const onClick = (id) => {
    let likes = [];
    if (likeArray.includes(id)) { 
      likes = likeArray.filter((itemId)=> itemId !== id);
    } else {
      likes = [...likeArray, id];
    }

    updateLikeArray(likes);
  };

  const renderList = prop.products.map((product) => {
    return (
      <article key={product.id} className="product__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6">
        <section>
        <Link to={`/product/${product.id}`}>
          <div className="img--hover--zoom">
            <img src={product.image} alt={product.title} />
          </div>
        </Link>

        <div className="title__section">
          <h4>{product.title}</h4>
          {product.price && <p>${product.price}</p>}

          <svg onClick={() => onClick(product.id)} name={product.id} className="like" xmlns="http://www.w3.org/2000/svg" width="22.903" height="20.232" viewBox="0 0 22.903 20.232">
            <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
              transform="translate(-0.549 -1.998)" fill={likeArray?.includes(product.id) ? "red" : "none"}
              stroke={likeArray?.includes(product.id) ? "red" : "#172026"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
        </section>
      </article>

    );
  });
  return <>{renderList}</>;
};

export default ProductItem;

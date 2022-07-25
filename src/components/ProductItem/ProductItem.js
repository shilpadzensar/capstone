import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setWishlist } from "../../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import './ProductItem.scss';

import { ReactComponent as RedLike } from './../../assets/images/red-like.svg';
import { ReactComponent as BlackLike } from './../../assets/images/black-like.svg';

const ProductItem = (prop) => {
  const wishlistProducts = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  const onClickHandler = (id) => {
    dispatch(setWishlist(id));
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

            {wishlistProducts?.includes(product.id)
              ? < RedLike onClick={() => onClickHandler(product.id)} />
              : <BlackLike onClick={() => onClickHandler(product.id)} />}

          </div>
        </section>
      </article>

    );
  });
  return <>{renderList}</>;
};

export default ProductItem;

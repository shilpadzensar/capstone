import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedProduct, setWishlist } from "../../redux/actions/productsActions";
import ThumbnailCarousal from "./../ThumbnailCaraousal/ThumbnailCaraousal";
import StarRatings from 'react-star-ratings';
import Quantity from "./../Quantity/Quantity";

import './Product.scss';
import icon1 from "./images/sweat.png";
import icon2 from "./images/breathable.png";
import icon3 from "./images/feather.png";
import icon4 from "./images/materials.png";
import { ReactComponent as RedLike } from './../../assets/images/red-like.svg';
import { ReactComponent as BlackLike } from './../../assets/images/black-like.svg';


const Product = () => {

  const wishlistProducts = useSelector((state) => state.wishlist.wishlist);
  const { productId } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [isReadMore, setIsReadMore] = useState(true); 
  const [quantity, setQuantity] = useState(1);

  let products = useSelector((state) => state.product.products);

  let product = products.find(obj => {
    return obj.id == productId
  })

  const { image, title, price, description } = product;

  const routeChange = () => {
    let item = { ...product, quantity: quantity }
    dispatch(addSelectedProduct(item));

    let path = `/cart`;
    navigate(path);
  }

  const updateQuantity = (num) => {
    setQuantity(num);
  }

  const onClickHandler = (id) => {
    dispatch(setWishlist(id));
  };

 return (
    <div>
      <article className="product-wrapper aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
        <div className="left__col aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
          <ThumbnailCarousal image={image} />
        </div>
        <div className="right__col aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
          <h1>{title}</h1>
          <p className="__price">${price}</p>
          <StarRatings
            rating={product.rating.rate}
            starRatedColor="rgb(23, 32, 38)"
            numberOfStars={5}
            name='rating'
            starDimension="18px"
            starSpacing="2px"
          />({product.rating.count})

          <p className="__description">

            {isReadMore ? description.slice(0, 125) : description}
            &nbsp;
            <span className="show--more" onClick={() => setIsReadMore(!isReadMore)} >
              {isReadMore ? "Read more" : "Show less"}
            </span>       
          </p>

          <section>
            <label className="quantity__label">Quantity</label>
            <div className="quantity__section">
              <Quantity quantity={quantity} updateQuantity={(value) => updateQuantity(value)} />
            </div>
          </section>


          <section>
            <button onClick={routeChange} className="primary__btn">ADD TO CART</button>

            <div className="social__share">
              <span tabIndex="0" role="link" aria-label="like product">
                {wishlistProducts?.includes(product.id)
                  ? <> <RedLike onClick={() => onClickHandler(product.id)} /> Saved</>
                  : <> <BlackLike onClick={() => onClickHandler(product.id)} /> Save for later</>}
              </span>

              <span tabIndex="0" role="link" aria-label="social media share">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                  <g id="share-2" transform="translate(-2 -1)">
                    <circle id="Ellipse_155" data-name="Ellipse 155" cx="3" cy="3" r="3" transform="translate(15 2)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <circle id="Ellipse_156" data-name="Ellipse 156" cx="3" cy="3" r="3" transform="translate(3 9)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <circle id="Ellipse_157" data-name="Ellipse 157" cx="3" cy="3" r="3" transform="translate(15 16)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <line id="Line_551" data-name="Line 551" x2="6.83" y2="3.98" transform="translate(8.59 13.51)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <line id="Line_552" data-name="Line 552" x1="6.82" y2="3.98" transform="translate(8.59 6.51)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
                Share</span>
            </div>
          </section>
        </div>
      </article>

      <article className="product__more__info aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
          <h1>{title}</h1>
          <p className="__title">Description</p>
          <p className="__description">{description}</p>
        </div>

        <div className="link__list__wrapper aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
          <p>Details</p>
          <div className="link__list">
            <div className="item"><img src={icon1} className="--icon" alt="Sweat wicking" /> Sweat-wicking</div>
            <div className="item"><img src={icon2} className="--icon" alt="Breathable" />Breathable</div>
            <div className="item"><img src={icon3} className="--icon" alt="Lightweight fabric" />Lightweight fabric</div>
            <div className="item"><img src={icon4} className="--icon" alt="nylon" />69% nylon, 31% lycra</div>
          </div>
        </div>
      </article>
    </div>

  );
};

export default Product;

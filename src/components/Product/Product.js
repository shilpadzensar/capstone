import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSelectedProduct } from "../../redux/actions/productsActions";
import './Product.scss';
import ThumbnailCarousal from "./../ThumbnailCaraousal/ThumbnailCaraousal";

import icon1 from "./images/sweat.png";
import icon2 from "./images/breathable.png";
import icon3 from "./images/feather.png";
import icon4 from "./images/materials.png";


const Product = () => {
  const { productId } = useParams();
  // Fetch data from store
  let products = useSelector((state) => state.product.products);

  var product = products.find(obj => {
    return obj.id == productId
  })
  const { image, title, price, description } = product;

  //START Quantity Code
  let [num, setQuantity] = useState(1);

  let increaseQuantity = () => {
    if (num < 10) {
      setQuantity(Number(num) + 1);
    }
  };

  let decreaseQuantity = () => {
    if (num > 0) {
      setQuantity(num - 1);
    }
  }

  let handleChange = (e) => {
    setQuantity(e.target.value);
  }
  // END Quantity Code


  let navigate = useNavigate();
  let textInput = React.createRef();
  const dispatch = useDispatch();

  const routeChange = () => {

    let item = { ...product, quantity: num }

    dispatch(addSelectedProduct(item));

    let path = `/cart`;
    navigate(path);
  }

  return (
    <div>
      <article className="product-wrapper aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
        <div className="left__col aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
          <ThumbnailCarousal image={image} />
        </div>
        <div className="right__col aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
          <h1>{title}</h1>
          <p className="__price">{price}</p>
          <p className="__description">{description}</p>          

          <section>
            <p>Quantity</p>
            <div className="quantity__wrapper">
              <span className="--minus" onClick={decreaseQuantity}></span>
              <input ref={textInput} type="text" className="--quantity" value={num} onChange={handleChange} />
              <span className="--plus" onClick={increaseQuantity}></span>
            </div>
          </section>

          <section>
            <button onClick={routeChange} className="primary__btn">ADD TO CART</button>

            <div className="social__share">
              <span tabIndex="0" role="link" aria-label="like product">
                <svg className="like" xmlns="http://www.w3.org/2000/svg" width="22.903" height="20.232" viewBox="0 0 22.903 20.232">
                  <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
                    transform="translate(-0.549 -1.998)" fill="none"
                    stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg> Save
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

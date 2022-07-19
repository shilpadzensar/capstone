import React from 'react';
import './Banner.scss';
import Button from "../Button/Button";
import BannerImg from './images/banner.webp';

import BannerImg1 from '../../assets/images/banner/fashion1.jpg';
import MapPin from './images/map-pin.svg';



function Banner(prop) {

    return (
        <div className={`${prop.container} banner-wrapper banner--${prop.flow}` }>

            <div className="img__banner">
                <img src={BannerImg} alt="banner image" ></img>
            </div>

            <div className="banner__content">
                {prop.title && <h2>{prop.title}</h2>}
                {prop.description && <p>{prop.description}</p>}

                {prop.btn && <Button type="promo">{prop.btn}</Button>}               
                
            </div>

            {prop.showLocator && <div className="banner__locator"><img src={MapPin} alt="map pin" /><hr /></div>}

        </div>
    );
}


export default Banner;
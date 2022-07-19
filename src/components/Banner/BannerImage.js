import React from 'react';
import { useNavigate } from "react-router-dom";
import './BannerImage.scss';
import Button from "../Button/Button";
import Banner1 from './images/model2.jpg';


function BannerImage(prop) {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/product'; 
        navigate(path);
    }

    return (
        <div className="container banner-image-wrapper aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
            <div className="banner__details aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">

                {prop.title && <h2>{prop.title}</h2>}

                {prop.subtitle && <label>{prop.subtitle}</label>}

                {prop.description && <p>{prop.description}</p>}

                {prop.secondaryBtn && <Button type="primary" onClick={routeChange}>{prop.secondaryBtn}</Button>} 

                {prop.primaryBtn && <Button type="secondary" onClick={routeChange}>{prop.primaryBtn}</Button>}

                <hr/>                             

            </div>

            <div className="banner__image aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                <img src={Banner1} alt="banner image" />
            </div>
        </div>
    );
}


export default BannerImage;
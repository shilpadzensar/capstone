import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import './BannerCaraousal.scss';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Banner1 from './images/banner1.jpeg';
import Banner2 from './images/banner2.jpeg';
import Banner3 from './images/banner3.jpeg';
import Banner4 from './images/banner4.jpeg';

const BANNERS = [
    {
        id: 1,
        label: "Shop the new Signature Collection",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.",
        altText: "shopping women",
        img: Banner1,
        btnLabel: "Shop Now"
    },
    {
        id: 2,
        label: "Shop the new Signature Collection",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.",
        altText: "shopping women",
        img: Banner2,
        btnLabel: "Shop Now"
    },
    {
        id: 3,
        label: "Shop the new Signature Collection",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.",
        altText: "shopping man",
        img: Banner3,
        btnLabel: "Shop Now"
    },
    {
        id: 4,
        label: "Shop the new Signature Collection",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.",
        altText: "shopping man",
        img: Banner4,
        btnLabel: "Shop Now"
    }
]

function BannerCaraousal() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/product'; 
        navigate(path);
    }

    return (
        <div className="banner-caraousal-wrapper">
            <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}>

                {BANNERS?.map((data) => {
                    return (
                        <SwiperSlide>
                            <div key={data.id} className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                                <div className="banner__details aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                                    <h2>{data.label}</h2>
                                    <p>{data.description}</p>
                                    <Button type="primary" onClick={routeChange}>{data.btnLabel}</Button>
                                </div>

                                <div className="banner__image aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                                    <img src={data.img} alt={data.altText} />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </div >
    );
};

export default BannerCaraousal;
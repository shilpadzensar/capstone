import React from "react";
import "./ThumbnailCaraousal.scss";
import downArrow from './images/arrow-down-grey.svg';

const ThumbnailCaraousal = (props) => {

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide-image");
        let dots = document.getElementsByClassName("thumbnail");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        if (dots[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }


    const image = props.image;

    return (        
        <div className="thumbnail-caraousal-wrapper aem-Grid aem-Grid--12">
            <div className="row show__lg aem-GridColumn aem-GridColumn--default--2">
                <div className="thumbnail-caraousal-column">
                    <img className="thumbnail" src={image} onClick={() => currentSlide(1)} alt="Product 1" />
                </div>
                <div className="thumbnail-caraousal-column">
                    <img className="thumbnail" src={image} onClick={() => currentSlide(2)} alt="Product 2" />
                </div>
                <div className="thumbnail-caraousal-column">
                    <img className="thumbnail" src={image} onClick={() => currentSlide(3)}  alt="Product 3" />
                </div>
                <div className="thumbnail-caraousal-column">
                    <img className="thumbnail" src={image} onClick={() => currentSlide(4)}  alt="Product 4" />
                </div>
                <div className="thumbnail-caraousal-column">
                    <img className="thumbnail" src={image} onClick={() => currentSlide(5)}  alt="Product 5" />
                </div>                

                <a className="next-slide"  onClick={() => plusSlides(1)}><img src={downArrow} alt="Product 7" /></a>
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--10">
                <div className="slide-image img--hover--zoom" style={{display:"block"}}>                    
                    <img src={image} alt="large size product" />
                </div>

                <div className="slide-image img--hover--zoom">
                    <img src={image}  alt="large size product"/>
                </div>

                <div className="slide-image img--hover--zoom">
                    <img src={image} alt="large size product" />
                </div>

                <div className="slide-image img--hover--zoom">
                    <img src={image} alt="large size product" />
                </div>

                <div className="slide-image img--hover--zoom">
                    <img src={image} alt="large size product" />
                </div>               

            </div>

        </div>

    );

};

export default ThumbnailCaraousal;
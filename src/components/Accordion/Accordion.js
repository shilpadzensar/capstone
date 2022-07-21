import React, {useEffect} from "react";
import "./Accordion.scss";
import { ReactComponent as Uparrow} from './../../assets/images/chevron-down.svg';

const Accordion = (props) => {

    useEffect(() => {
        const accordionBtns = document.querySelectorAll(".accordion");

        accordionBtns.forEach((accordion) => {
            accordion.onclick = function () {
                this.classList.toggle("is-open");

                let content = this.nextElementSibling;

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            };
        });

      }, [])


    return (
        <div className="accordion-wrapper">

            <button className="accordion__btn">Estimate your Shipping <p>shipping to 91001 <Uparrow /></p></button>
            <div className="accordion__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                </p>
            </div>

            <button className="accordion__btn">Enter a Coupon Code <p>20% discount applied<Uparrow /></p></button>
            <div className="accordion__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                </p>
            </div>

            <button className="accordion__btn">Apply Gift Card <p><Uparrow /></p></button>
            <div className="accordion__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                </p>
            </div>
        </div>
    )
};


export default Accordion;
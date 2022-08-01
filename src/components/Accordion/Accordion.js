import React, { useState } from "react";
import "./Accordion.scss";
import { ReactComponent as Downarrow } from './../../assets/images/chevron-down.svg';
import { ReactComponent as Uparrow } from './../../assets/images/chevron-up.svg';

const Accordion = ({ title, content, subcontent }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="accordion__item">
                <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
                    <div className='cart__accordian__title'>{title}<br />
                        <span className='accordion__subtitle '>{subcontent}</span></div>

                    <div className='text__right'>{isActive ? <Uparrow /> : <Downarrow />}</div>
                </div>
                {isActive && <div className="accordion__content">{content}</div>}
            </div>
        </>
    );
};

export default Accordion;
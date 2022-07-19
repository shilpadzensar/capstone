import React from "react";
import './Dropdown.scss';

const Select = React.forwardRef(({name, label, list, ...rest }, ref) => (

    <>
        <label className="select__label">{label}</label>
        <div className="select__list">
            <select name={name} ref={ref} {...rest}>            
            {list?.map((data) => {
                    return (                    
                    <option value={data.code} key={data.code} >{data.name}</option>
                    );
                })}
            </select>
        </div>
    </>
));

export default Select;

import React from "react";
import './Filter.scss';


const Filter = (props) => {

    return (
        <div className="filter-wrapper">
            <p>{props.title}</p>
            <ul>
                {props.filterArray?.map((filter) => {
                    return (
                        <li key={filter.id}>
                            <input type="checkbox" id={`option${filter.id}`} name={`option${filter.id}`} value={`option${filter.id}`} />
                            <label htmlFor={`option${filter.id}`}>{filter.name}</label>
                        </li>
                    );
                })}
            </ul>

            {props.show ?
                <p className="border--line">
                    <a href="#">Show More</a>
                </p> : ''
            }
        </div>

    );
}

export default Filter;
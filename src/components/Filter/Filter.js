import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { setFilter } from "../../redux/actions/productsActions";
import './Filter.scss';


const Filter = (props) => {

    const dispatch = useDispatch();
    const [filterValue, setFilterValue] = useState(false);

    useEffect(() => {        
        dispatch(setFilter(filterValue));
    }, [filterValue]);

    
    const handleClick = (event, id) => {
        event.target.checked ? setFilterValue(id) : setFilterValue('');
    };

    return (
        <div className="filter-wrapper">
            <p>{props.title}</p>
            <ul>
                {props.filterArray?.map((filter) => {
                    return (
                        <li key={filter.id}>
                            <input type="checkbox" 
                            id={`option-${filter.id}`}
                            name={`option-${filter.id}`} value={filter.id} 
                            onClick={event => handleClick(event, filter.id)} />
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
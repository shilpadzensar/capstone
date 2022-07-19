import React from 'react';
import {useMediaQuery} from './../../hooks/hooks';


function Spacer(props) {

    const isMobile = useMediaQuery('(min-width: 768px)');

    let background = {
        border: 0,
        backgroundColor: props.color,  
        height: isMobile  ? props.desktopHeight : props.mobileHeight
    };

    return (
        <hr style={background} ></hr>
      );    
}


export default Spacer;
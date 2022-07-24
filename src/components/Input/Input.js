import React, { forwardRef } from "react";
import './Input.scss';
const Input = forwardRef(({label, placeholder, ...rest}, ref)=> {
  return(
      <>
      <label className="text__label">{label}</label>
      <div className="text__field"><input placeholder={placeholder}  {...rest} ref={ref} />
      

      </div>
    </>
  );
});
export default Input;

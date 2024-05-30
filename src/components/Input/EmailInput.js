import React from "react";
import "./EmailInput.css";

const EmailInput = (props) => {
  return (
    <div>
      <input
        className="emailInput pl-2"
        placeholder="Email address"
        required=""
        type="email"
        value={props.value} 
        onChange={props.onChange} 
      />
    </div>
  );
};

export default EmailInput;

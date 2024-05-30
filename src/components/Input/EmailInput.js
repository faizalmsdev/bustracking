// EmailInput.js
import React, { useContext } from 'react';
import './EmailInput.css';
import { DataContext } from '../../contexts/DataContexts';  

const EmailInput = () => {
  const { contactInfo, setContactInfo } = useContext(DataContext);

  const handleChange = (event) => {
    const { value } = event.target;
    setContactInfo((prev) => ({
      ...prev,
      email: value,
    }));
  };

  return (
    <div>
      <input
        className="emailInput pl-2"
        placeholder="Email address"
        required=""
        type="email"
        value={contactInfo.email}
        onChange={handleChange}
      />
    </div>
  );
};

export default EmailInput;

// PhoneInput.js
import React, { useContext, useState } from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import { DataContext } from '../../contexts/DataContexts';  

const PhoneInput = () => {
  const { contactInfo, setContactInfo } = useContext(DataContext);
  const [phone, setPhone] = useState(contactInfo.phone);

  const handleChange = (value) => {
    setPhone(value);
    setContactInfo((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  return (
    <ReactPhoneInput
      placeholder="Enter phone number"
      disableSearchIcon
      country={"in"}
      containerStyle={{}}
      inputStyle={{
        width: "464px",
      }}
      value={phone}
      onChange={handleChange}
    />
  );
};

export default PhoneInput;

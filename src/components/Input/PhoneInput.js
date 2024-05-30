import ReactPhoneInput from "react-phone-input-2";
import { useState } from "react";
import "react-phone-input-2/lib/bootstrap.css";

const Form = (props) => {
  const [phone, setphone] = useState("");
  return (
    <ReactPhoneInput
      placeholder="Enter phone number"
      disableSearchIcon
      country={"in"}
      containerStyle={{}}
      inputStyle={{
        width: "464px"
      }}
      value={phone}
      onChange={(event) => setphone(event.value)}
    />
  );
};

export default Form;

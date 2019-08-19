import React from "react";

const Form = () => {
  return (
    <div>
      <input type="text" name="city" placeholder="Enter City Name ..." />
      <input type="text" name="country" placeholder="Enter Country ..." />
      <button>Get Weather</button>
    </div>
  );
};

export default Form;

import React, { useState } from "react";
import propTypes from "prop-types";

export const AddCategory = ({ setcategories }) => {
  const [inputValue, setInputValue] = useState("");

  const addText = (e) => {
    setInputValue(e.target.value);
  };

  const sumit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setcategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={sumit}>
      <input type="text" value={inputValue} onChange={addText} />
    </form>
  );
};

AddCategory.propType = {
  setcategories: propTypes.func.isRequired,
};

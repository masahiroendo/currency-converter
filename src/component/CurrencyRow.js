import React from "react";
import classes from "./CurrencyRow.module.css";

const CurrencyRow = (props) => {
  const { currencyOptions } = props;
  return (
    <div>
      <input type="number" className={classes.input} />
      <select>
        {currencyOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;

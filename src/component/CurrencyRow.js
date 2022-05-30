import React from "react";
import classes from "./CurrencyRow.module.css";

const CurrencyRow = (props) => {
  const { currencyOptions, selectedCurrency, onChangeCurrency } = props;
  return (
    <div>
      <input type="number" className={classes.input} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
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

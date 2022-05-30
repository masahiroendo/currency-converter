import { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./component/CurrencyRow";

const BASE_URL = "https://api.apilayer.com/exchangerates_data";
const LATEST_CURRENCY_URL = `${BASE_URL}/latest`;

function App() {
  // const [currency, setCurrency] = useState("EUR");
  const [currencyOptions, setCurrencyOptions] = useState([]);

  // const makeLiveUrl = (curr) => `${LATEST_CURRENCY_URL}?$base=${curr}`;

  useEffect(() => {
    // fetch(makeLiveUrl(currency), {
    //   redirect: "follow",
    //   headers: {
    //     apikey: "JeX3jzUOJWgXSwSq15TR997ywptiieHV",
    //   },
    // })
    fetch(LATEST_CURRENCY_URL, {
      redirect: "follow",
      headers: {
        apikey: "JeX3jzUOJWgXSwSq15TR997ywptiieHV",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []);

  return (
    <>
      <h1>Converter</h1>
      <CurrencyRow currencyOptions={currencyOptions} />
      <div className="equals">=</div>
      <CurrencyRow currencyOptions={currencyOptions} />
    </>
  );
}

export default App;

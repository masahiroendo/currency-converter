import { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./component/CurrencyRow";

const BASE_URL = "https://api.apilayer.com/exchangerates_data";
const LATEST_CURRENCY_URL = `${BASE_URL}/latest`;

function App() {
  // const [currency, setCurrency] = useState("EUR");
  const [exchangeDate, setExchangeDate] = useState("");
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();
  const [amountIsFromCurrency, setAmountIsFromCurrency] = useState(true);

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
        console.log(data);
        setExchangeDate(data.date);
        const firstCurrency = Object.keys(data.rates)[149];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
        //   const XAU = Object.keys(data.rates)[158];
        //   const XAG = Object.keys(data.rates)[157];
        //   setCurrencyOptions([XAU, ...Object.keys(data.rates)]);
        //   setFromCurrency(XAU);
        //   setToCurrency(XAG);
        //   setExchangeRate(data.rates[XAU] / data.rates[XAG]);
      });
  }, []);

  return (
    <>
      <h1>Today is {exchangeDate} and exchange rate is:</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(event) => setFromCurrency(event.target.value)}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(event) => setToCurrency(event.target.value)}
      />
    </>
  );
}

export default App;

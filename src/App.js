import { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./component/CurrencyRow";
import { getExchangeRate, getLatestExchangeData } from "./currencyApi";

const BASE_URL = "https://api.apilayer.com/exchangerates_data";
// const LATEST_CURRENCY_URL = `${BASE_URL}/latest`;

function App() {
  // const [currency, setCurrency] = useState("EUR");
  const [exchangeDate, setExchangeDate] = useState("");
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [amountIsFromCurrency, setAmountIsFromCurrency] = useState(true);

  // const makeLiveUrl = (curr) => `${LATEST_CURRENCY_URL}?$base=${curr}`;

  let toAmount, fromAmount;
  if (amountIsFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    const asyncLatestData = async () => {
      const data = await getLatestExchangeData(`${BASE_URL}/latest`);
      setCurrencyOptions(Object.keys(data.rates));
      /** set default currency the hardocded way */
      setFromCurrency(data.base || "EUR");
      setToCurrency("JPY");
      setExchangeDate(data.date);
    };
    asyncLatestData();
    // fetch(makeLiveUrl(currency), {
    //   redirect: "follow",
    //   headers: {
    //     apikey: "JeX3jzUOJWgXSwSq15TR997ywptiieHV",
    //   },
    // })
    /*
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        apikey: "JeX3jzUOJWgXSwSq15TR997ywptiieHV",
      },
    };

    fetch(LATEST_CURRENCY_URL, requestOptions)
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
      */
  }, []);

  useEffect(() => {
    const asyncGetRate = async () => {
      const rate = await getExchangeRate(
        `${BASE_URL}/convert`,
        fromCurrency,
        toCurrency
      );
      setExchangeRate(rate);
    };
    asyncGetRate();
    /*
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        apikey: "JeX3jzUOJWgXSwSq15TR997ywptiieHV",
      },
    };
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `${BASE_URL}/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
    */
  }, [fromCurrency, toCurrency]);

  const changeFromAmountHandler = (event) => {
    setAmount(event.target.value);
    setAmountIsFromCurrency(true);
  };

  const changeToAmountHandler = (event) => {
    setAmount(event.target.value);
    setAmountIsFromCurrency(false);
  };

  return (
    <>
      <h1>{`Today is ${exchangeDate}`}</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(event) => setFromCurrency(event.target.value)}
        amount={fromAmount}
        onChangeAmount={changeFromAmountHandler}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(event) => setToCurrency(event.target.value)}
        amount={toAmount}
        onChangeAmount={changeToAmountHandler}
      />
      <h3>{exchangeRate && `... and the exchange rate is: ${exchangeRate}`}</h3>
    </>
  );
}

export default App;

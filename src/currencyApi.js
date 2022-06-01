const isDev = process.env.NODE_ENV === "development";
// const apiKey = "JeX3jzUOJWgXSwSq15TR997ywptiieHV";
const apiKey = "G2ul9WcpV2i6qzXXUcl1bquMIiYXAw2v";

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: {
    apikey: apiKey,
  },
};

export const getExchangeRate = (url, from, to) => {
  if (isDev) {
    console.info("retuning fake exchange rate", convertResponse);
    return convertResponse.info.rate;
  }

  if (from === null || to === null) {
    throw Error("Missing parameters");
  }

  return fetch(`${url}?to=${to}&from=${from}&amount=1`, requestOptions)
    .then((response) => response.json())
    .then((data) => data.info.rate);
};

export const getLatestExchangeData = (url) => {
  if (isDev) {
    return lastestResponse;
  }

  return fetch(`${url}`, requestOptions)
    .then((response) => response.json())
    .then((data) => data);
};

export const convertAmountTo = (baseUrl, from, to, amount) => {
  if (isDev) {
    return convertResponse.result;
  }

  if (from === null || to === null || amount === null) {
    throw Error("Missing parameters");
  }

  return fetch(
    `${baseUrl}/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => data.result);
  // .then(callback);
};

const convertResponse = {
  date: "2011-01-07",
  historical: true,
  info: {
    rate: 107.667239,
    timestamp: 1294444799,
  },
  query: {
    amount: 10,
    from: "EUR",
    to: "JPY",
  },
  result: 1076.67239,
  success: true,
};

const lastestResponse = {
  base: "EUR",
  date: "2022-05-31",
  rates: {
    AED: 3.944945,
    AFN: 95.849858,
    ALL: 120.81411,
    AMD: 482.697936,
    ANG: 1.940912,
    AOA: 450.582734,
    ARS: 128.884577,
    AUD: 1.49268,
    AWG: 1.933797,
    AZN: 1.826635,
    BAM: 1.95498,
    BBD: 2.174634,
    BDT: 95.935299,
    BGN: 1.954824,
    BHD: 0.404881,
    BIF: 2213.8225,
    BMD: 1.074033,
    BND: 1.471744,
    BOB: 7.426038,
    BRL: 5.105633,
    BSD: 1.077002,
    BTC: 3.3958402e-5,
    BTN: 83.478003,
    BWP: 12.866709,
    BYN: 3.637719,
    BYR: 21051.049607,
    BZD: 2.170956,
    CAD: 1.360505,
    CDF: 2153.436488,
    CHF: 1.031728,
    CLF: 0.032326,
    CLP: 891.973681,
    CNY: 7.147905,
    COP: 4223.001656,
    CRC: 727.442841,
    CUC: 1.074033,
    CUP: 28.461878,
    CVE: 110.216578,
    CZK: 24.707864,
    DJF: 191.734872,
    DKK: 7.439494,
    DOP: 59.317246,
    DZD: 156.309618,
    EGP: 19.958327,
    ERN: 16.110498,
    ETB: 55.932101,
    EUR: 1,
    FJD: 2.300902,
    FKP: 0.878915,
    GBP: 0.850688,
    GEL: 3.103998,
    GGP: 0.878915,
    GHS: 8.406107,
    GIP: 0.878915,
    GMD: 58.13205,
    GNF: 9522.7184,
    GTQ: 8.266068,
    GYD: 225.331005,
    HKD: 8.428185,
    HNL: 26.465278,
    HRK: 7.541819,
    HTG: 121.693472,
    HUF: 394.508499,
    IDR: 15625.302676,
    ILS: 3.591621,
    IMP: 0.878915,
    INR: 83.435731,
    IQD: 1571.926721,
    IRR: 45539.005061,
    ISK: 136.713875,
    JEP: 0.878915,
    JMD: 166.101427,
    JOD: 0.761513,
    JPY: 137.246433,
    KES: 125.44139,
    KGS: 88.680785,
    KHR: 4375.551766,
    KMF: 493.786468,
    KPW: 966.630068,
    KRW: 1329.679837,
    KWD: 0.328407,
    KYD: 0.89751,
    KZT: 456.491574,
    LAK: 14456.815964,
    LBP: 1628.692046,
    LKR: 393.12032,
    LRD: 162.715462,
    LSL: 16.840528,
    LTL: 3.17134,
    LVL: 0.649672,
    LYD: 5.123806,
    MAD: 10.642524,
    MDL: 20.506386,
    MGA: 4354.073341,
    MKD: 61.588229,
    MMK: 1994.04104,
    MNT: 3303.479779,
    MOP: 8.707175,
    MRO: 383.429647,
    MUR: 46.666499,
    MVR: 16.588433,
    MWK: 1100.273782,
    MXN: 21.008142,
    MYR: 4.703727,
    MZN: 68.555244,
    NAD: 16.75637,
    NGN: 445.960133,
    NIO: 38.608162,
    NOK: 10.103699,
    NPR: 133.552757,
    NZD: 1.642395,
    OMR: 0.413531,
    PAB: 1.077022,
    PEN: 3.95588,
    PGK: 3.843389,
    PHP: 56.337877,
    PKR: 214.04809,
    PLN: 4.579645,
    PYG: 7390.118883,
    QAR: 3.910546,
    RON: 4.94474,
    RSD: 117.515364,
    RUB: 66.616916,
    RWF: 1098.580645,
    SAR: 4.028375,
    SBD: 8.728499,
    SCR: 13.708722,
    SDG: 489.283865,
    SEK: 10.522399,
    SGD: 1.470754,
    SHP: 1.479377,
    SLL: 14069.834451,
    SOS: 626.161128,
    SRD: 22.634711,
    STD: 22230.3176,
    SVC: 9.42386,
    SYP: 2698.455127,
    SZL: 16.656462,
    THB: 36.720912,
    TJS: 12.251132,
    TMT: 3.759116,
    TND: 3.258581,
    TOP: 2.469417,
    TRY: 17.63556,
    TTD: 7.299727,
    TWD: 31.145247,
    TZS: 2498.201327,
    UAH: 31.816848,
    UGX: 4036.626582,
    USD: 1.074033,
    UYU: 42.97352,
    UZS: 11884.019622,
    VEF: 229660745813.58002,
    VND: 24904.143508,
    VUV: 122.725109,
    WST: 2.7703,
    XAF: 655.623182,
    XAG: 0.048919,
    XAU: 0.000579,
    XCD: 2.902628,
    XDR: 0.798197,
    XOF: 655.653689,
    XPF: 119.966959,
    YER: 268.776516,
    ZAR: 16.69316,
    ZMK: 9667.578201,
    ZMW: 18.551636,
    ZWL: 345.838234,
  },
};

export const CURRENCIES = Object.keys(lastestResponse.rates);

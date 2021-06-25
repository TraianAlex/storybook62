import { getExchangeRates } from '../api';

export const CHANGE_AMOUNT = 'rates/amountChanged';
export const CHANGE_CURRENCY_CODE = 'rates/currencyCodeChanged';
export const RATES_RECEIVED = 'rates/ratesReceived';

const initialState = {
  amount: '12.99',
  currencyCode: 'EUR',
  // rates: { USD: 1.0 }, // 1
  // rates: [{ code: 'USD', rate: 1.0 }], // 2
  // rates: [{ displayLabel: 'US Dollars', code: 'USD', rate: 1.0 }], // 3
  rates: { USD: { displayLabel: 'US Dollars', code: 'USD', rate: 1.0 } }, // 4
  supportedSymbols: ['USD', 'EUR', 'JPY', 'CAD', 'GBP', 'MXN'],
};

export const rateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AMOUNT:
      return { ...state, amount: action.payload };
    case CHANGE_CURRENCY_CODE:
      return { ...state, currencyCode: action.payload };
    case 'rates/labelReceived': // 3
      const { displayLabel, currencyCode } = action.payload;
      return {
        ...state,
        // rates: state.rates.map((data) => { // 3
        //   if (currencyCode === data.code) {
        //     return { ...data, displayLabel };
        //   }
        //   return data;
        // }),
        rates: { // 4
          ...state.rates,
          [currencyCode]: { ...state.rates[currencyCode], displayLabel },
        },
      };
    case RATES_RECEIVED: {
      //const codes = Object.keys(action.payload).concat(state.currencyCode); // 0
      // const rates = []; // 2 - 3
      const rates = {}; // 4
      for (let code in action.payload) {
        // rates.push({ code, rate: action.payload[code] }); 2 - 3
        rates[code] = { code, rate: action.payload[code] }; // 4
      }
      return { ...state, rates }; // rates: action.payload // 1, supportedSymbols: codes // 0
    }
    default:
      return state;
  }
};

// action creators
export const changeCurrencyCode = (
  currencyCode = initialState.currencyCode,
) => {
  return (dispatch, getState) => {
    const state = getState();
    const symbols = getSupportedSymbols(state);
    dispatch({ type: CHANGE_CURRENCY_CODE, payload: currencyCode });

    getExchangeRates(currencyCode, symbols).then((rates) =>
      dispatch({ type: RATES_RECEIVED, payload: rates }),
    );
  };
};

export const changeAmount = (amount) => ({
  type: CHANGE_AMOUNT,
  payload: amount,
});

// selectors
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;
export const getRates = (state) => state.rates.rates;
export const getSupportedSymbols = (state) => state.rates.supportedSymbols;

// 3
// export const getDisplayLabel = (state, currencyCode) => {
//   const match = state.rates.find((data) => data.code === currencyCode);
//   if (match) return match.displayLabel;
// };

// 4
export const getDisplayLabel = (state, currencyCode) => {
  const match = state.rates[currencyCode];
  if (match) return match.displayLabel;
};

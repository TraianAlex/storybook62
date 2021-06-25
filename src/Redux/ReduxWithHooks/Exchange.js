import React from 'react';
import { Provider } from 'react-redux';
import { ExchangeRate } from './ExchangeRate';
import { store } from './store';
// import { changeCurrencyCode } from "./reducers/RateReducer";

// kick start the exchange rate call
// store.dispatch(changeCurrencyCode());

export const Exchange = () => {
  return (
    <Provider store={store}>
      <ExchangeRate />
    </Provider>
  );
};

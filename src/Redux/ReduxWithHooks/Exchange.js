import React from 'react';
import { Provider } from 'react-redux';
import { ExchangeRate } from './ExchangeRate';
import { store } from './store';
// import { updateCurrencyCode } from "./reducers/RateReducer";

// kick start the exchange rate call
// store.dispatch(updateCurrencyCode());

export const Exchange = () => {
  return (
    <Provider store={store}>
      <ExchangeRate />
    </Provider>
  );
};

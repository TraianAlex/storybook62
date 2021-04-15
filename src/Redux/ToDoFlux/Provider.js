// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { createStore } from './store';

const Provider = props => {
  const [state, setState] = useState();

  useEffect(() => {
    props.store.subscribe(() => setState(props.store.getState()));
  });

  return React.cloneElement(props.children, state);
};

const store = createStore();

export const connect = (select = () => {}) => {
  return Component => props => (
    <Provider store={store}>
      <Component
        {...select(store.getState(), props)}
        dispatch={store.dispatch}
      />
    </Provider>
  );
};

// src/store.js

import { createStore } from 'redux';

// Reducer (función que define cómo se actualiza el estado)
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Crear el store de Redux
const store = createStore(counterReducer);

export default store;
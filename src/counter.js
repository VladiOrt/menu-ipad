// src/Counter.js

import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

function Counter(props) {
  return (
    <div>
      <p>Conteo: {props.count}</p>
      <button onClick={props.increment}>Incrementar</button>
      <button onClick={props.decrement}>Decrementar</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
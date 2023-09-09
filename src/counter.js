// src/Counter.js

import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Counter(props) {
  return (
    <div>
      <p>Conteo: {props.count}</p>
      <FavoriteBorderIcon onClick={props.increment}/>
      <FavoriteBorderIcon onClick={props.decrement}/>
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
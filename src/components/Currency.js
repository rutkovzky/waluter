import React, { useEffect, useState } from 'react';
import '../styles/Currency.css';
import { useDispatch } from 'react-redux';  
import { addFavourite } from '../redux/actions/currenciesActions';

const Currency = ({ name, code, mid }) => {
  const [x, setX] = useState([])

  const dispatch = useDispatch();
  
  console.log(x)

  return (
    <div className="currency-container">
      <div className="currency-row">
        <div className="currency">
          <h2>{code}</h2>
          <p style={{textTransform: 'uppercase'}}>{name}</p>
        </div>
        <div className='currency-data'>
          <p className="currency-mid">{mid.toFixed(2)} PLN</p>
          <span><i style={{color: '#F45B69'}} className="fas fa-heart"></i></span>
          <button onClick={() => dispatch(addFavourite({name, code, mid}))}>Dodaj do ulubionych</button>
        </div>
      </div>
    </div>
  )
};

export default Currency;

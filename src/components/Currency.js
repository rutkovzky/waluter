import React, { useState } from 'react';
import '../styles/Currency.css';
import { useDispatch, useSelector } from 'react-redux';  
import { addFavourite, removeFavourite } from '../redux/actions/currenciesActions';

const Currency = ({ name, code, mid, currencies}) => {
  const [buttonOn, setButtonOn] = useState(true);
  const dispatch = useDispatch();

  return (
    <div className="currency-container">
      <div className="currency-row">
        <div className="currency">
          <h2>{code}</h2>
          <p style={{textTransform: 'uppercase'}}>{name}</p>
        </div>
        <div className='currency-data'>
          <p className="currency-mid">{mid.toFixed(2)} PLN</p>
          {buttonOn
          ?
          <>
            <button className="favourite-button" onClick={() => { dispatch(addFavourite(name, code, mid)); setButtonOn(false)}}>Dodaj do ulubionych</button>
            <span><i style={{color: '#F45B69'}} className="far fa-heart"></i></span>
          </>
          :
          <>
            <button className="favourite-button" onClick={() => { dispatch(removeFavourite(name, code, mid)); setButtonOn(true)}}>Usuń z ulubionych</button>
            <span><i style={{color: '#F45B69'}} className="fas fa-heart"></i></span>
          </>
          }
        </div>
      </div>
    </div>
  )
};

export default Currency;

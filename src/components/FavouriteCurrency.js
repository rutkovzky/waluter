import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFavourite } from '../redux/actions/currenciesActions';

const FavouriteCurrency = ({ name, code, mid }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <div className="currency-container">
        <div className="currency-row">
          <div className="currency">
            <h2>{code}</h2>
            <p style={{textTransform: 'uppercase'}}>{name}</p>
          </div>
          <div className='currency-data'>
            <p className="currency-mid">{mid.toFixed(2)} PLN</p>
            <button className="favourite-button" onClick={() => dispatch(removeFavourite(name, code, mid))}>Usuń z ulubionych</button>
            <span><i style={{color: '#F45B69'}} className="fas fa-heart"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavouriteCurrency;

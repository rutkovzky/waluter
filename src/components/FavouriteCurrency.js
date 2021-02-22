import React, { useState } from 'react';
import RemovePopup from '../components/RemovePopup';
import '../styles/Popup.css';

const FavouriteCurrency = ({ name, code, mid }) => {
  const [viewPopup, setViewPopup] = useState(false)

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
            <button className='favourite-button' onClick={() => setViewPopup(true)}>Usuń z ulubionych</button>
            <RemovePopup trigger={viewPopup} setTrigger={setViewPopup} name={name} code={code} mid={mid}/>
            <span><i style={{color: '#F45B69'}} className="fas fa-heart"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavouriteCurrency;

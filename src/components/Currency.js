import React from 'react'
import '../styles/Currency.css'

const Currency = ({ name, code, mid }) => {
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
        </div>
      </div>
    </div>
  )
}

export default Currency

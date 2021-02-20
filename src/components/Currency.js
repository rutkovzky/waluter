import React from 'react'
import '../styles/Currency.css'

const Currency = ({ name, code, bid, ask }) => {
  return (
    <div className="currency-container">
      <div className="currency-row">
        <div className="currency">
          <h2>{code}</h2>
          <p style={{textTransform: 'uppercase'}}>{name}</p>
        </div>
        <div className="currency-data">
          <p className="currency-actual-value">Aktualny kurs</p>
          <p className="currency-bid">{bid}</p>
          <p className="currency-ask">{ask}</p>
        </div>
      </div>
    </div>
  )
}

export default Currency

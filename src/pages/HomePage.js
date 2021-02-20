import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../styles/HomePage.css'
import Currency from "../components/Currency";

const HomePage = () => {
  const [currencies, setCurrencies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('http://api.nbp.pl/api/exchangerates/tables/C');
        setCurrencies(data[0].rates)
      } catch(err) {
          console.log(err)
      } 
    }

    getData()
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filterCurrencies = currencies.filter(currency => 
    currency.currency.toLowerCase().includes(search.toLocaleLowerCase()) ||
    currency.code.toLowerCase().includes(search.toLocaleLowerCase())
  )
  
  return (
    <div className='homepage-component'>
      <div className='currency-search'>
        <h1 className='currency-text'>Wyszukaj walutę</h1>
        <form>
          <input type="text" placeholder="Szukaj" className="currency-input" onChange={handleChange}/>
        </form>
      </div>
      {filterCurrencies.map(currency => {
        return(
          <Currency key={currency.code} name={currency.currency} code={currency.code} bid={currency.bid} ask={currency.ask} />
        )
      })}
    </div>
  )
}

export default HomePage

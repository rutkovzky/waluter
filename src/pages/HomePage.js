import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/HomePage.css';
import Currency from "../components/Currency";
import { listCurrencies } from '../redux/actions/currenciesActions';

const HomePage = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const currenciesList = useSelector(state => state.currenciesList)
  const { currencies } = currenciesList

  useEffect(() => {
    dispatch(listCurrencies())
  }, [dispatch])

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
          <Currency key={currency.code} name={currency.currency} code={currency.code} mid={currency.mid} currencies={currencies}/>
        )
      })}
    </div>
  )
}

export default HomePage

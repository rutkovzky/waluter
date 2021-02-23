import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import FavouriteCurrency from '../components/FavouriteCurrency';
import RemoveAllCurrenciesPopup from '../components/RemoveAllCurrenciesPopup.js'
import '../styles/FavoritesPage.css'

const FavouritesPage = () => {
  const [viewPopup, setViewPopup] = useState(false)

  const favorites = useSelector(state => state.favorites)
  return (
    <>
      {favorites.length === 0
      ?
      <h1 className='favourite-component-empty-h1'>Brak walut w ulubionych</h1>
      :
      <div className='favourite-component'>
        <h1 className='favourite-component-h1'>Ulubione waluty użytkownika</h1>
        {favorites.map(favourite => (
          <FavouriteCurrency key={favourite.code} name={favourite.name} code={favourite.code} mid={favourite.mid}/>
        ))}
        <button className="favourite-component-button" onClick={() => setViewPopup(true)}>Usuń wszystkie waluty</button>
        <RemoveAllCurrenciesPopup trigger={viewPopup} setTrigger={setViewPopup} favorites={favorites}/>
      </div>
      }
    </>
  )
}

export default FavouritesPage

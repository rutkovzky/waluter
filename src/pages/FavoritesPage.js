import React from 'react';
import { useSelector } from 'react-redux'
import FavouriteCurrency from '../components/FavouriteCurrency';

const FavouritesPage = () => {
  const favorites = useSelector(state => state.favorites)
  return (
    <>
      {favorites.length === 0
      ?
      <h2>Brak walut w ulubionych</h2>
      :
      <div>
        <h1 style={{textAlign: 'center', marginTop: '50px', marginBottom: '30px'}}>Ulubione waluty użytkownika</h1>
        {favorites.map(favourite => (
          <FavouriteCurrency name={favourite.name} code={favourite.code} mid={favourite.mid}/>
        ))}
      </div>
      }
    </>
  )
}

export default FavouritesPage

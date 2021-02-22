import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import FavouriteCurrency from '../components/FavouriteCurrency';
import { removeAllFavorites } from '../redux/actions/currenciesActions';
import '../styles/FavouritePage.css'

const FavouritesPage = () => {
  const dispatch = useDispatch()

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
          <FavouriteCurrency name={favourite.name} code={favourite.code} mid={favourite.mid}/>
        ))}
        <button className="favourite-component-button" onClick={() => dispatch(removeAllFavorites(favorites))}>Usuń wszystkie waluty</button>
      </div>
      }
    </>
  )
}

export default FavouritesPage

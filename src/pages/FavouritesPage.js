import React from 'react';
import { useSelector } from 'react-redux'

const FavouritesPage = () => {
  const favourites = useSelector(state => state.favourites)
  console.log(favourites)
  return (
    <div>
      <p>elko</p>
    </div>
  )
}

export default FavouritesPage

import axios from 'axios'

import { FAVOURITE_ADD_CURRENCY, FAVOURITE_REMOVE_CURRENCY } from '../constants/favouritesConstants';

export const addToFavourites = (code) => async (dispatch, getState) => {
  const dataFromTableA = await axios.get('http://api.nbp.pl/api/exchangerates/tables/A');
  const dataFromTableB = await axios.get('http://api.nbp.pl/api/exchangerates/tables/B');
  const dataFromAllTables = dataFromTableA.data[0].rates.concat(dataFromTableB.data[0].rates)
      dataFromAllTables.sort((a, b) => {
        if(a.code < b.code) { return -1; }
        if(a.code > b.code) { return 1; }
        return 0;
      })

      dispatch({
        type: FAVOURITE_ADD_CURRENCY,
        payload: {
          name: dataFromAllTables.currency,
          code: dataFromAllTables.code,
          mid: dataFromAllTables.mid
        }
      })

      localStorage.setItem('favouritesCurrencies', JSON.stringify(getState().favourites.favouritesCurrencies))
}
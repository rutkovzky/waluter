import axios from 'axios';
import {
  CURRENCIES_LIST_REQUEST,
  CURRENCIES_LIST_SUCCESS,
  CURRENCIES_LIST_FAIL,
  FAVOURITE_ADDED,
  FAVOURITE_REMOVED
} from '../constants/currenciesConstants';

export const listCurrencies = () => async (dispatch) => {
  try {
    dispatch({
      type: CURRENCIES_LIST_REQUEST
    })

    const dataFromTableA = await axios.get('http://api.nbp.pl/api/exchangerates/tables/A');
    const dataFromTableB = await axios.get('http://api.nbp.pl/api/exchangerates/tables/B');
    const dataFromAllTables = dataFromTableA.data[0].rates.concat(dataFromTableB.data[0].rates)
        dataFromAllTables.sort((a, b) => {
          if(a.code < b.code) { return -1; }
          if(a.code > b.code) { return 1; }
          return 0;
        })

    dispatch({
      type: CURRENCIES_LIST_SUCCESS,
      payload: dataFromAllTables
    })
  } catch (error) {
    dispatch({
      type: CURRENCIES_LIST_FAIL,
      payload: error
    })
  }
}

export const addFavourite = (code) => async (dispatch) => ({
  type: FAVOURITE_ADDED,
  payload: code
});
  

export const removeFavourite = code => {
  return {
    type: FAVOURITE_REMOVED,
    payload: {
      code: code
    }
  };
};
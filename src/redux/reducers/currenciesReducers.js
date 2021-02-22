import {
  CURRENCIES_LIST_REQUEST,
  CURRENCIES_LIST_SUCCESS,
  CURRENCIES_LIST_FAIL,
  FAVOURITE_ADDED,
  FAVOURITE_REMOVED,
  FAVORITES_ALL_REMOVED
} from '../constants/currenciesConstants';

export const currenciesListReducer = (state = { currencies: [] }, action) => {
  switch (action.type) {
    case CURRENCIES_LIST_REQUEST:
      return { loading: true, currencies: [] }
    case CURRENCIES_LIST_SUCCESS:
      return { loading: false, currencies: action.payload}
    case CURRENCIES_LIST_FAIL:
      return { loading: false, error: action.payload}
    default:
      return state
  }
}

export const favorites = (state = [], action) => {
  switch (action.type) {
    case FAVOURITE_ADDED:
      if(state.find(element => element.code === action.payload.code)){
        return state
      } else {
        return state.concat(action.payload)
      }
    case FAVOURITE_REMOVED: 
      return state.filter(element => element.code !== action.payload.code)
    case FAVORITES_ALL_REMOVED:
      return state = []
    default: 
      return state
  }
}
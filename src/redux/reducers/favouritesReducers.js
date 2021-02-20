import {
  FAVOURITE_ADD_CURRENCY,
  FAVOURITE_REMOVE_CURRENCY
} from '../constants/favouritesConstants';

export const favouriteReducer = (state = { favouritesCurrencies: [] }, action) => {
  switch (action.type) {
    case FAVOURITE_ADD_CURRENCY:
      const currency = action.payload

      const existItem = state.favouritesCurrencies.find(currency => currency.code === currency)

      if(existItem) {
        return {
          ...state,
          favouritesCurrencies: state.favouritesCurrencies.map(x => x.code === existItem.code ? currency : x)
        }
      } else {
        return {
          ...state,
          favouritesCurrencies: [...state.favouritesCurrencies, currency]
        }
      }
    default:
      return state
  }
}
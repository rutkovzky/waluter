import {
  CURRENCIES_LIST_REQUEST,
  CURRENCIES_LIST_SUCCESS,
  CURRENCIES_LIST_FAIL
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
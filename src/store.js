import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { currenciesListReducer, favorites } from './redux/reducers/currenciesReducers';

const reducer = combineReducers({
  currenciesList: currenciesListReducer,
  favorites: favorites
})

const favouritesCurrenciesFromStorage = localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favouritesCurrencies')) : []

const initialState = {
  favourites: {favouritesCurrencies: favouritesCurrenciesFromStorage}
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
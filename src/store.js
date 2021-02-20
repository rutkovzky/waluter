import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { currenciesListReducer } from './redux/reducers/currenciesReducers';
import { favouriteReducer } from './redux/reducers/favouritesReducers';

const reducer = combineReducers({
  currenciesList: currenciesListReducer,
  favourites: favouriteReducer
})

const favouritesCurrenciesFromStorage = localStorage.getItem('favouritesCurrencies') ? JSON.parse(localStorage.getItem('favouritesCurrencies')) : []

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
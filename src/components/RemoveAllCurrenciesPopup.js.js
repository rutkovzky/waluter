import React from 'react'
import { useDispatch } from 'react-redux';
import { removeAllFavorites } from '../redux/actions/currenciesActions';

const RemoveAllCurrenciesPopup = (props) => {
  const dispatch = useDispatch()

  return (props.trigger) ? (
    <div className='popup-container'>
      <div className="popup-inner">
        <p>Czy na pewno chcesz usunąć wszystkie waluty z ulubionych?</p>
        <div>
          <button className='popup-button' onClick={() => { dispatch(removeAllFavorites(props.favorites)); props.setTrigger(false)}}>Potwierdź</button>
          {props.children}
          <button className='popup-button' onClick={() => props.setTrigger(false)}>Anuluj</button>
        </div>
      </div>
    </div>
  ) : ""
}

export default RemoveAllCurrenciesPopup

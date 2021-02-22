import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFavourite } from '../redux/actions/currenciesActions';

const RemovePopup = (props) => {
  const dispatch = useDispatch()

  return (props.trigger) ? (
    <div className='popup-container'>
      <div className="popup-inner">
        <p>Czy na pewno chcesz usunąć wybraną walutę z ulubionych?</p>
        <button className='popup-button' onClick={() => props.setTrigger(false)}>Anuluj</button>
        <button className='popup-button' onClick={() => { dispatch(removeFavourite(props.name, props.code, props.mid)); props.setTrigger(false)}}>Potwierdź</button>
        {props.children}
      </div>
    </div>
  ) : ""
}

export default RemovePopup

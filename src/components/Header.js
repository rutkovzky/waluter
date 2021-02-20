import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'><h1>Waluter</h1></Link>
      <ul>
        <Link to='/favourites'><i style={{color: '#F45B69'}} className="fas fa-heart"></i> Ulubione</Link>
        <Link to='/info'><i style={{color: '#FFDF64'}} className="fas fa-info-circle"></i> Info</Link>
      </ul>
    </header>
  )
}

export default Header;

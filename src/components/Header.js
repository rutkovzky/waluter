import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Waluter</h1>
      <ul>
        <Link to='/favourites'>Ulubione</Link>
        <Link to='/info'>Info</Link>
      </ul>
    </header>
  )
}

export default Header;

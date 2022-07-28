import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-5">
      <div className="flex items-center justify-center">
        <Link to="/">
          <img src={require(`../images/star-wars-logo.svg`).default} alt="Star Wars Home" width="144" height="54" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

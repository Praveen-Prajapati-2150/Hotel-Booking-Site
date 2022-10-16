import React from 'react';
import './styles/header.scss';
import { GrFavorite } from 'react-icons/gr';
import { BiHeartCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>RealState</h1>
        {/* <h3>Rent</h3>
        <h3>Buy</h3>
        <h3>Sell</h3> */}
      </div>
      <div className="login_buttons">
        {/* <button>Login</button> */}
        {/* <button>Sign up</button> */}
        {/* <button> */}
        <BiHeartCircle className="icon" />
        {/* </button> */}
        <Link to="/favorite">
          <button>Favorite</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

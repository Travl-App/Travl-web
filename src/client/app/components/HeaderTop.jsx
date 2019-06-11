import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderTop extends Component {
  render() {
    return (
      <div className="header__top">
        <Link to="/" className="header__logo">TRAVL</Link>
        <div className="header__top_navigation">
          <a href="#">ИЗБРАННОЕ</a>
          <a className="header__button_login" href="#">ВОЙТИ</a>
        </div>
      </div>
    );
  }
}

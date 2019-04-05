import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <ul className="header__navigation">
          <li> <Link to='/'> Главная </Link> </li>
          <li> <Link to='/articles'> Статьи </Link> </li>
          <li> <Link to='/articles/1'> {`Статья 1`} </Link> </li>
        </ul>
      </header>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';

import HeaderTop from './HeaderTop'
import HeaderNavigation from './HeaderNavigation'
import Cities from './CitiesNames'

export default class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      cities: [],
      loading: false
    };
  }

  toggleClass = () => {
    this.setState({
      isActive: false,
      showSearchCities: false,
      active: true
    })
  }

  showSearchCities = (url) => () => {
    this.setState({
      loading: true,
      isActive: !this.state.isActive,
      showSearchCities: !this.state.isActive,
      active: this.state.isActive
    });

    fetch(url)
      .then(res => res.json())
      .then(cities => {
        this.setState({
          cities: cities.cities,
          loading: false
        });
      });
  }

  render() {
    const { loading, cities } = this.state;
    return (
      <header className="header">
        <img className="header__picture" src='images/photo_main.jpg'/>
        <div className="header__top">
          <Link to="/" className="header__logo" onClick={this.toggleClass}>TRAVL</Link>
          <div className="header__top_navigation">
            <a href="#">ИЗБРАННОЕ</a>
            <a className="header__button_login" href="#">ВОЙТИ</a>
          </div>
        </div>
        <ul className="header__navigation">
          <li> <a className={this.state.isActive===true ? "selected" : null} onClick={this.showSearchCities('https://travl.dev/api/cities/')}> Города </a> </li>
          <li> <NavLink to='/articles' activeClassName={this.state.active===true ? "selected" : null} exact onClick={this.toggleClass}> Статьи </NavLink> </li>
          <li> <NavLink to='/articles/1' activeClassName={this.state.active===true ? "selected" : null} exact onClick={this.toggleClass}> {`Статья 1`} </NavLink> </li>
        </ul>
        <div className={this.state.showSearchCities===true ? "main_page__searching" : "display_none"}>
          <div className="searching_holder">
            <input type="text" placeholder=" &#xe8b6; исследуйте город"></input>
            <div className="main_page__searching_cities">
              { loading ? <MDSpinner /> : <Cities cities={ cities } /> }
            </div>
          </div>
        </div>
      </header>
    );
  }
}

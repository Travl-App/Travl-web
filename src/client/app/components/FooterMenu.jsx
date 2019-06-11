import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FooterMenu extends Component {
  render() {
    const { menuItems } = this.props;
    return (
      <div className="footer__menu">
        <ul className="footer__menu_list">
          {menuItems.map(menuItem => <li key={menuItem.id}> <Link to={menuItem.link} >{menuItem.title}</Link></li>)}
        </ul>
      </div>
    );
  }
}

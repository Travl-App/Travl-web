import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FooterMenuSocial extends Component {
  render() {
    const { menuItems } = this.props;
    return (
      <div className="footer__menu">
        <ul className="footer__menu_list">
          <li> <Link to="#"><i className="fab fa-vk"></i> В Контакте</Link></li>
          <li> <Link to="#"><i className="fab fa-instagram"></i> Instagram</Link></li>
          <li> <Link to="#"><i className="fab fa-twitter"></i> Twitter</Link></li>
          <li> <Link to="#"><i className="fab fa-facebook-square"></i> Facebook</Link></li>
          <li> <Link to="#"><i className="fab fa-telegram-plane"></i> Telegram</Link></li>
        </ul>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FooterMenuSocial extends Component {
  render() {
    const { menuItems } = this.props;
    return (
      <div className="footer__menu">
        <ul className="footer__menu_list">
          <li> <Link to="#">О приложениях</Link></li>
          <li> <Link to="#"><img src="images/app_store.png"/></Link></li>
          <li> <Link to="#"><img src="images/google_play.png"/></Link></li>
        </ul>
      </div>
    );
  }
}

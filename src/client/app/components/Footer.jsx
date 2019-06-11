import React, { Component } from 'react';
import FooterMenu from './FooterMenu';
import FooterMenuMobile from './FooterMenuMobile'
import FooterMenuSocial from './FooterMenuSocial';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <div className="footer__info_mobile">
              <p>МЕСТА В СМАРТФОНЕ</p>
              <FooterMenuMobile />
            </div>
            <div className="footer__info_company">
              <p>КОМПАНИЯ</p>
                <FooterMenu menuItems={[
                  {id: 1, link: '#', title: 'О нас'},
                  {id: 2, link: '#', title: 'Команда'},
                  {id: 3, link: '#', title: 'Рассылка'}
                ]}>
                </FooterMenu>
            </div>
            <div className="footer__info_contacts">
              <p>КОНТАКТЫ</p>
              <FooterMenu menuItems={[
                {id: 1, link: '#', title: 'Связаться с нами'},
                {id: 2, link: '#', title: 'Связаться с автором'},
                {id: 3, link: '#', title: 'Рекламодателям'}
              ]}>
              </FooterMenu>
            </div>
            <div className="footer__info_social">
              <p>ПОДПИСЫВАЙТЕСЬ</p>
              <FooterMenuSocial />
            </div>
          </div>
          <p className="footer__rights">&copy; 2019 Travl.dev</p>
        </div>
      </footer>
    );
  }
}

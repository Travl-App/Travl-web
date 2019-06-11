import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AuthorName extends Component {
  static propTypes = {
      author: PropTypes.shape({
        username: PropTypes.string,
        image: PropTypes.string,
        link: PropTypes.string,
      }),
      modified: PropTypes.string
  };

  static defaultProps = {
    author: {
      username: 'Имя не задано',
    },
    modified: 'Дата не задана',
  };

  getDate = (date) => {
    return new Date(date).toLocaleString('ru', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  }

  render() {
    const { author, modified } = this.props;
    return (
        <div className="container article__author_social_container">
          <div className="article__author">
            <img className="article__author_logo" alt="author logo" src={`https://travl.dev${author.image}`} />
            <p>{author.username}</p>
            <p>{`${this.getDate(modified)}`}</p>
          </div>
          <ul className="article__social">
            <li> <Link to="#"><i className="fab fa-telegram-plane"></i></Link></li>
            <li> <Link to="#"><i className="fab fa-facebook-square"></i></Link></li>
            <li> <Link to="#"><i className="fab fa-vk"></i></Link></li>
            <li> <Link to="#"><i className="fab fa-twitter"></i></Link></li>
            <li> <Link to="#"><i className="fas fa-share-alt"></i></Link></li>
          </ul>
        </div>

    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const dateArray = date.split(' ');
    return dateArray[0];

  }

  render() {
    const { author, modified } = this.props;
    return (
        <div className="article__author">
          <img className="article__author_logo"  alt="author logo"></img>
          <p>{author.username}</p>
          <p>{`${this.getDate(modified)}`}</p>
        </div>
    );
  }
}

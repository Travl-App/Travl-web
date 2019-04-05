import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ArticleImage from './ArticleImage';

export default class ArticleCard extends PureComponent {

  static propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Место не найдено',
  };

  getId = (url) => {
    const urlArray = url.split('/');
    return urlArray[urlArray.length-2];
  }

  render() {
    const { link, title } = this.props;


    return (
      <Link to={`articles/${this.getId(link)}`} className={`article__place_card article__card`} id={`articles_${this.getId(link)}`}>
        <ArticleImage imageSource ={`https://travl.dev${link}`} />
        <h2 className="h2">{title}</h2>
      </Link>

    );
  }
}

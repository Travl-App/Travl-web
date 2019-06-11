import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getId } from './getId'

import ArticleImage from './ArticleImage';

export default class ArticleCard extends PureComponent {

  static propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Место не найдено',
  };

  render() {
    const { link, title } = this.props;


    return (
      <Link to={`articles/${getId(link)}`} className={`main__article_card`} key={`main_articles_${getId(link)}`}>
        <ArticleImage imageSource ={`https://travl.dev${link}`} />
        <div className='main__image_hover'/>
        <h2 className="h2">{title}</h2>
      </Link>

    );
  }
}

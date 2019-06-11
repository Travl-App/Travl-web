import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import MainArticleCard from '../components/MainArticleCard'

export default class MainArticleList extends PureComponent {
  static propTypes = {
    articles: PropTypes.arrayOf({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      modified: PropTypes.string.isRequired,
    })
  };

  static defaultProps = {
    articles: [],
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="main__articles">
        {articles.map(article => <MainArticleCard {...article} key={`Travl_zine ${article.id}}`}/>)}
      </div>
    );
  }
}

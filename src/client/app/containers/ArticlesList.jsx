import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ArticlesCard from '../components/ArticlesCard'

export default class ArticleList extends PureComponent {
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
      <div className="article article__card">
        {articles.map(article => <ArticlesCard {...article} />)}
      </div>
    );
  }
}

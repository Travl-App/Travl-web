import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MDSpinner from 'react-md-spinner';

import ArticlesList from './ArticlesList';

export default class ArticleListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    fetch('https://travl.dev/api/articles/')
      .then(res => res.json())
      .then(articles => {
        this.setState({
          loading: false,
          articles: articles.articles,
        })
      })
  }

  render() {
    const { loading, articles } = this.state;

    return (
      <div className="articles">
        { loading ? <MDSpinner /> : <ArticlesList articles={ articles } /> }
      </div>
    );
  }
}

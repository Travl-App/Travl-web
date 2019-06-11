import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MDSpinner from 'react-md-spinner';

import MainArticlesList from './MainArticlesList'

export default class HomePageContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    fetch(`https://travl.dev/api/articles/?travlzine=true `)
      .then(res => res.json())
      .then(articles => {
        this.setState({
          loading: false,
          articles: articles.articles
        })
      })
  }

  render() {
    const { loading, articles } = this.state;

    return (
      <div className="container">
        { loading ? <MDSpinner /> : <MainArticlesList articles = {articles} /> }
      </div>

    );
  }
}

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MDSpinner from 'react-md-spinner';

import AuthorName from '../components/AuthorName';
import ArticlePlaces from '../containers/ArticlePlaces';

export default class Article extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
      loading: false,
      path: this.props.path
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    fetch(`https://travl.dev/api/articles/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(article => {
        this.setState({
          loading: false,
          article: article.article
        })
      })
  }

  render() {
    const { loading, article } = this.state;

    return (
      <div className="article articles" id={`article_${article.id}`}>
        <h2 className="h2">{article.title}</h2>
        <AuthorName author={ article.author } modified = { article.modified }/>
        <img className="article__place_image" src={`https://travl.dev${article.image_cover}`}/>
        <p>{article.subtitle}</p>
        { loading ? <MDSpinner /> : <ArticlePlaces places={ article.article_places } /> }
      </div>

    );
  }
}

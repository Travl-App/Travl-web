import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MDSpinner from 'react-md-spinner';

import AuthorName from '../components/AuthorName';
import ArticlePlaces from '../containers/ArticlePlaces';

export default class ArticleContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
      loading: false,
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
      <div className="article articles main_page" id={`article_${article.id}`}>

        <div className="article__head container">
          <h2 className="h2 article__title">{article.title}</h2>
        </div>
        <img className="article__cover" src={`https://travl.dev${article.image_cover}`}/>
        <AuthorName author={ article.author } modified = { article.modified }/>
        <div className="article__whole_text">
          <p>{article.subtitle}</p>
          { loading ? <MDSpinner /> : <ArticlePlaces places={ article.article_places } /> }
        </div>
      </div>

    );
  }
}

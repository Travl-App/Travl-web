import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Articles from './containers/ArticlesListContainer';
import MainArticles from './containers/MainArticlesContainer';
import ArticleContainer from './containers/ArticleContainer';
import PlaceContainer from './containers/PlaceContainer';

export default class App extends Component {

  render() {
    return (
      <div className="body">
        <Header />
        <main className="container">
          <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/articles" component={MainArticles} />
            <Route path="/articles/1" component={ArticleContainer} />
            <Route path="/places/:id/" component={PlaceContainer} />
            <Route path="/articles/:id" component={ArticleContainer} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

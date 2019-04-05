import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Articles from './containers/ArticlesListContainer';
import MainArticles from './containers/MainArticlesContainer';
import Article from './containers/Article';
import Place from './components/Place';

export default class App extends Component {

  render() {
    return (
      <div className="body">
        <Header />
        <main>
          <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/articles" component={MainArticles} />
            <Route path="/articles/1" component={Article} />
            <Route path="/places/:id/" component={Place} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

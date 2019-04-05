import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MDSpinner from 'react-md-spinner';
import { Switch, Route } from 'react-router-dom';

import Articles from './ArticlesListContainer';
import Article from './Article';

export default class MainArticleContainer extends PureComponent {

  render() {
    return (
      <Switch>
        <Route exact path="/articles" component={Articles} />
        <Route path="/articles/:id" component={Article} />
      </Switch>
    );
  }
}

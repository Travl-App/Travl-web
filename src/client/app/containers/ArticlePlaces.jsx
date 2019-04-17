import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import ArticlePlaceCard from '../components/ArticlePlaceCard';


export default class ArticlePlaces extends PureComponent {
  static propTypes = {
    places: PropTypes.objectOf({
      link: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
    })
  };

  static defaultProps = {
    places: [],
  };


  render() {
    const { places } = this.props;
    return (
      <div className="article__places">
        { places.map(place => <ArticlePlaceCard {...place} />) }
      </div>
    );
  }
}

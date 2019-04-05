import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import PlaceCard from '../components/PlaceCard';


export default class ArticlePlaces extends PureComponent {
  static propTypes = {
    places: PropTypes.shape({
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
        { places.map(place => <PlaceCard {...place} />) }
      </div>
    );
  }
}

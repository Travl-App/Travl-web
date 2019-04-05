import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import PlaceOtherImage from './PlaceOtherImage'

export default class PlaceCard extends PureComponent {

  static propTypes = {
      link: PropTypes.string,
      selected_image: PropTypes.string,
      other_images: PropTypes.arrayOf({
        link: PropTypes.string,
      }),
      description: PropTypes.string,
      id: PropTypes.number,
  };

  static defaultProps = {
    description: 'Место не найдено',
    other_images: []
  };

  render() {
    const { link, selected_image, other_images, title, description, id } = this.props;
    return (

        <div className="article__place_card">

          <Carousel showArrows= { false } showStatus={ false } showThumbs={ false }>
            <div>
              <img className="article__place_image" src={`https://travl.dev${selected_image}`} alt="place image"></img>
            </div>
            { other_images.map(other_image => <PlaceOtherImage imgSrc = {other_image} />) }
          </Carousel>
          <Link to={`/places/${id}`} id={`place_${id}`}>

          <p className="article__place_description"> {description}</p>
        </Link></div>

    );
  }
}

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MDSpinner from 'react-md-spinner';

import PlaceOtherImage from './PlaceOtherImage'

export default class ArticlePlaceCard extends PureComponent {

  static propTypes = {
      link: PropTypes.string,
      selected_image: PropTypes.string,
      other_images: PropTypes.arrayOf({
        link: PropTypes.string,
      }),
      title: PropTypes.string,
      article_text: PropTypes.string,
      id: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = {
      title: [],
      loading: false,
    };
  }

  static defaultProps = {
    article_text: 'Место не найдено',
    other_images: []
  };

  componentWillMount(){
    this.setState({
      loading: true,
      images: []
    })
    fetch(`https://travl.dev/api/places/${this.props.id}`)
      .then(res => res.json())
      .then(images => {
        this.setState({
          loading: false,
          images: images
        })
      })
  }

  render() {
    const { link, selected_image, title, other_images, article_text, id } = this.props;
    const { loading, images } = this.state;

    return (
        <div>
          <div className="article__place_card">
            <div>
              { loading ? <MDSpinner /> :
                <Link to={`/places/${id}`} id={`place_${id}`}>
                  <h2 className="h2"> {title} </h2>
                </Link>
              }
            </div>
            <Carousel showArrows= { true } showStatus={ false } showThumbs={ false }>
              <div>
                <img className="article__place_image" src={`https://travl.dev${selected_image}`} alt="place image"></img>
              </div>
              { other_images.map(other_image => <PlaceOtherImage imgSrc = {other_image} />) }
            </Carousel>
          </div>
          <p className="article__place_description"> {article_text}</p>
        </div>

    );
  }
}

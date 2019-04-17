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
      description: PropTypes.string,
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
    description: 'Место не найдено',
    other_images: []
  };

  sendFetch = (url) => () => {
    this.setState({
      loading: true,
      title: []
    })
    fetch(url)
      .then(res => res.json())
      .then(title => {
        this.setState({
          loading: false,
          title: title.place
        })
        console.log('Fetched')
      })
  }

  componentWillMount(){
    this.setState({
      loading: true,
      title: []
    })
    fetch(`https://travl.dev/api/places/${this.props.id}`)
      .then(res => res.json())
      .then(title => {
        this.setState({
          loading: false,
          title: title
        })
      })
  }

  render() {
    const { link, selected_image, other_images, description, id } = this.props;
    const { loading, title } = this.state;

    return (
        <div className="article__place_card">

          <div>
            { loading ? <MDSpinner /> :
              <Link to={`/places/${id}`} id={`place_${id}`} onClick = {this.sendFetch(`https://travl.dev/api/places/${id}`)}>
                <h2 className="h2"> {title.place.title} </h2>
              </Link>
            }
          </div>
          <Carousel showArrows= { false } showStatus={ false } showThumbs={ false }>
            <div>
              <img className="article__place_image" src={`https://travl.dev${selected_image}`} alt="place image"></img>
            </div>
            { other_images.map(other_image => <PlaceOtherImage imgSrc = {other_image} />) }
          </Carousel>
          <p className="article__place_description"> {description}</p>
        </div>

    );
  }
}

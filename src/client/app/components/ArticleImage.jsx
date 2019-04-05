import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MDSpinner from 'react-md-spinner';

import Image from './Image';

export default class ArticleImage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      image: [],
      imageLoading: false,
      imageSource: this.props.imageSource
    };
  }

  componentWillMount() {
    this.setState({
      imageLoading: true,
    });
    fetch(this.props.imageSource)
      .then(res => res.json())
      .then(image => {
        this.setState({
          imageLoading: false,
          image: image,
        });
      });
  }

  render() {
    const { imageLoading, image, imageSource } = this.state;

    return (
      <div className="article__image_cover">
      {imageLoading ? <MDSpinner /> : <Image image={ image } />}</div>
    );
  }
}

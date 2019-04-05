import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Image extends PureComponent {
  static propTypes = {
    image: PropTypes.shape({
      article: PropTypes.shape({
        image_cover: PropTypes.string
      })
    })
  };
  render() {
    const { image } = this.props;

    return (
      <img className="article__place_image" src={`https://travl.dev${image.article.image_cover}`} />
    );
  }
}

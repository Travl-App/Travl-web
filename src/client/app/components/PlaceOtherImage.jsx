import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ArticleImage extends PureComponent {
  static propTypes = {
    imgSrc: PropTypes.string,
    }

  render() {
    const { imgSrc } = this.props;

    return (
      <div><img className="article__place_image" src={`https://travl.dev${imgSrc}`} /></div>
    );
  }
}

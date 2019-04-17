import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class Header extends Component {


  render() {
    const { place } = this.props;
    return (
      <div>Это будет карточка места {place.id}
        <h2>{place.title}</h2>
      </div>


    );
  }
}

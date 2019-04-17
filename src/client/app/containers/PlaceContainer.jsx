import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';

import Place from '../components/Place'


export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: [],
      loading: false,
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    fetch(`https://travl.dev/api/places/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(place => {
        this.setState({
          loading: false,
          place: place.place
        })
      })
  }

  render() {
    const { loading, place } = this.state;
    return (
      <div>
        { loading ? <MDSpinner /> : <Place place={place} />}
      </div>



    );
  }
}

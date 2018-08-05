import React from 'react';
import { NavLink } from 'react-router-dom';
import wave from './wave.svg';

export default class HomeButton extends React.Component {
  render() {
    return (
      <div class="home-button">
        <NavLink className="nav-link" to={this.props.link}>
          {this.props.title}
        </NavLink>
        <img src={wave} class="wave" />
      </div>
    );
  }
}

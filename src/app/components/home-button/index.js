import React from 'react';
import wave from './wave.svg';

export default class HomeButton extends React.Component {
  render() {
    return (
      <div
        class="home-button"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <a href={this.props.link}>{this.props.title}</a>
        <img src={wave} class="wave" />
      </div>
    );
  }
}

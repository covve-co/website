import React from 'react';
import HomeButton from '../home-button/';
import waves from './waves.svg';
import logo from './logo.svg';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      waves: -300
    };
  }
  _onMouseMove(e) {
    this.setState({ waves: -300 + e.screenY / 20 });
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 5, flexDirection: 'row' }}>
        <div
          class="home-left"
          style={{ flex: 2, display: 'flex', flexDirection: 'column' }}
        >
          <img class="logo" style={{ flex: 1 }} src={logo} alt="this no work" />
          <div style={{ flex: 5 }} onMouseMove={this._onMouseMove.bind(this)}>
            <HomeButton link="/about" title="About" />
            <HomeButton link="/work" title="Work" />
            <HomeButton link="/contact" title="Contact" />
            {/* <HomeButton link="/contact" title="Contact" /> */}
          </div>
        </div>
        <div class="home-right" style={{ flex: 1 }}>
          <img
            id="waves"
            class="waves"
            src={waves}
            alt="this no work"
            style={{
              position: 'absolute',
              top: this.state.waves,
              height: '150vh'
            }}
          />
        </div>
      </div>
    );
  }
}

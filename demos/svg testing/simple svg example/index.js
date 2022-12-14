import React, { Component } from 'react';
import { render } from 'react-dom';
import DynamicSVG from './DynamicSVG';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <DynamicSVG />
      </div>
    );
  }
}

render(<App />, document.getElementById('svg-container'));

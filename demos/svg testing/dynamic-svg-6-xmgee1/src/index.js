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
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DynamicSVG, null));
  }
}

render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));

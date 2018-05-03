import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <div>
        <div id="loader">
        </div>
        <div style={{ display: 'none' }} id="myDiv" className="animate-bottom">
        </div>
      </div>
    );
  }
};

export default Loader;
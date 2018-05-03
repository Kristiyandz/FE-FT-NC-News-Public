import React, { Component } from 'react';
import './Homepage.css'

class HomePage extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron" id="home-page">
          <h1 class="display-4">Hello!</h1>
          <p class="lead">This is a simple react app showing Northcoders articles, comment and users!.</p>
          <hr class="my-4" />
          <p>You can start by clicking one one the navigation buttons!</p>
        </div>
      </div>
    );
  };
};


export default HomePage;
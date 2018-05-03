import React, { Component } from 'react';
import './Home.css';

class HomeGrid extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center" id="containers">
          <div id="left-container">
            <p className="info">This app will fetch data from another API and it will represent it in a user-friendly way</p>
          </div>
          <div id="right-container">
            <p className="info">
              The fetched data will include different articles, topics and users
            </p>
          </div>
        </div>
        <div className="row" id="bottom-container">
          <div className="col">
            <p id="info-bottom">
              Users of this app will have the ability to increment/decrement votes on comments and articles, posting and deleting comments as they wish.
              Start by exploring the menu above.
            </p>
          </div>
        </div>
      </div>
    );
  };
};
export default HomeGrid;
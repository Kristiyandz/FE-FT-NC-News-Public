import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Topics from './components/Topics';
import Home from './components/Home';
import Articles from './components/Articles';
import Article from './components/Article';
import Users from './components/Users';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-dark p-4">
                <h5 className="text-white h4"> <i className="fas fa-angle-left"></i> NC News /<i className="fas fa-angle-right"></i></h5>
                <span className="text-muted">
                  <ul>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/articles'>Articles</Link>
                    </li>
                    <li>
                      <Link to='/topics'>Topics</Link>
                    </li>
                    <li>
                      <Link to='/users'>Users</Link>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route path="/topics" render={props => <Topics {...props} />} />
          <Route path="/articles/:id" component={Article} />
          <Route path="/users" component={Users} />
          <hr />
        </div>
      </Router>
    );
  };
};
export default App;

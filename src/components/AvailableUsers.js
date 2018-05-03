import React, { Component } from 'react';
import './AvailableUsers.css';

class AvailableUsers extends Component {
  render() {
    return (
      <div>
        <small id="emailHelp" className="form-text text-muted">This API will work only with one of the following usernames.</small>
        <div className="av-users">
          <div className="row" id="users-row">
            <div className="col-sm" >
              <ul id="users">
                <li>tickle122</li>
                <li>grumpy19</li>
                <li>happyamy2016</li>
                <li>cooljmessy</li>
                <li>weegembump</li>
                <li>jessjelly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
export default AvailableUsers;
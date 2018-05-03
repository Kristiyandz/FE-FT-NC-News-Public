import React, { Component } from 'react';
import './Users.css'

class Users extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    this.getUsers()
  }
  render() {
    return (
      <div id="all-users">
        {this.state.users.map(user => {
          return (
            <div key={user._id} className="card" style={{ width: '10rem' }}>
              <img className="card-img-top" src={user.avatar_url} alt="" />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
              </div>
            </div>
          )
        })}
      </div>
    );
  };
  getUsers = () => {
    fetch('https://ncnewsapp.herokuapp.com/api/users')
      .then(response => {
        let data = response.json()
        return data;
      })
      .then(data => {
        this.setState({ users: data.users });
      });
  };
};
export default Users;
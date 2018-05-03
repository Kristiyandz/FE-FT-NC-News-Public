import React, { Component } from 'react';
import axios from 'axios';


class LeaveAComment extends Component {
  state = {
    username: '',
    input: ''
  }
  render() {
    return (
      <div>
        <h1>Want to leave a comment?</h1>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">@</span>
          </div>
          <input type="text" onChange={this.getUserName} value={this.state.username} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Tell us what you think</span>
          </div>
          <textarea class="form-control" onChange={this.getInput} value={this.state.input} aria-label="With textarea"></textarea>
        </div>
        <button type="button" onClick={this.postComment} class="btn btn-success">Submit</button>
        <div>
        </div>
      </div >
    );
  }
  getUserName = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  getInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  postComment = () => {
    const { articleID } = this.props;
    const { input } = this.state;
    const { username } = this.state

    axios.post(`https://ncnewsapp.herokuapp.com/api/articles/${articleID}/comments?user=${username}`,
      {
        "comment": `${input}`,

      })
      .then((data) => {
        console.log(data);
      })
  }
};
export default LeaveAComment;
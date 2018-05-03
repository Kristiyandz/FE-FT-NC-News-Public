import React, { Component } from 'react';
import AvailableUsers from './AvailableUsers';
import axios from 'axios';
import './PostCommentForArticle.css';

class PostCommentForArticle extends Component {
  state = {
    userName: '',
    input: '',
  }
  render() {
    return (
      <div>
        <form id="post-comment-form">
          <div className="form-group">
            <h3>Have something to say?</h3>
            <AvailableUsers />
            <label htmlFor="exampleInputEmail1">Username</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" value={this.state.userName} onChange={this.getUserName} />
            <small id="emailHelp" className="form-text text-muted">Type your comment below.</small>
          </div>

          <div className="input-group">
            <textarea className="form-control" aria-label="With textarea" value={this.state.input} onChange={this.getUserInput}></textarea>
            <br />
          </div>
          <button type="button" className="btn btn-primary" onClick={() => this.postComment()}>Submit</button>
        </form>
      </div>
    );
  };

  getUserName = (event) => {
    this.setState({ userName: event.target.value });
  }
  getUserInput = (event) => {
    this.setState({ input: event.target.value });
  }
  postComment = () => {
    let id = this.props.article[0]._id;
    const { userName } = this.state;
    const { input } = this.state
    axios.post(`https://ncnewsapp.herokuapp.com/api/articles/${id}/comments?user=${userName}`,
      {
        "comment": `${input}`
      })
      .then((data) => {
        data.data.belongs_to = this.props.article[0].title;
        data.data.created_by = this.state.userName;
        this.props.func(data.data)
      });
  };
};
export default PostCommentForArticle;
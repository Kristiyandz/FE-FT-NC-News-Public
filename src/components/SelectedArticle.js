import React, { Component } from 'react';
import CommentsForArticle from './CommentsForArticle';
import LeaveAComment from './LeaveAcomment';
import axios from 'axios'

class SelectedArticle extends Component {
  state = {
    currArticleVote: 0,
    _id: this.props.singleArticle._id,
    body: this.props.singleArticle.body,
    comments: this.props.singleArticle.comments,
    created_by: this.props.singleArticle.created_by,
    title: this.props.singleArticle.title,
    votes: this.props.singleArticle.votes,
  }
  render() {
    let { _id } = this.state;
    let { body } = this.props;
    let { created_by } = this.props.singleArticle;
    let { title } = this.props.singleArticle;
    let { votes } = this.props.singleArticle
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h5 className="display-4">{title}</h5>
            <p className="lead">{this.props.singleArticle.body}</p>
          </div>
          <div className="list-group">
            <a class="list-group-item list-group-item-action flex-column align-items-start active" id="comments">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">By:{created_by}</h5>
                <small>Votes: {votes}</small>
              </div>
            </a>
          </div>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-light" onClick={() => {
              this.setState({
                currArticleVote: this.props.singleArticle.votes++,
              })
              this.incrementVote(_id)

            }}>Vote Up</button>
            <button type="button" className="btn btn-light" onClick={() => {
              this.setState({
                currArticleVote: this.props.singleArticle.votes--,

              })
              this.decrementVote(_id)
            }}>Vote Down</button>
          </div>
        </div>
        <CommentsForArticle
          articleTitle={title}
          {...this.props}
        />
        <LeaveAComment
          articleID={_id}
        />
      </div>
    );
  }
  incrementVote = (data) => {
    axios
      .put(
        `https://ncnewsapp.herokuapp.com/api/articles/${data}?vote=up`,
        "mytoken",
        { headers: { "Content-Type": "text/plain" } }
      )
      .then(r => console.log(r.status))
      .catch(e => console.log(e));
  }
  decrementVote = (data) => {
    axios
      .put(
        `https://ncnewsapp.herokuapp.com/api/articles/${data}?vote=down`,
        "mytoken",
        { headers: { "Content-Type": "text/plain" } }
      )
      .then(r => console.log(r.status))
      .catch(e => console.log(e));
  }
};


export default SelectedArticle;
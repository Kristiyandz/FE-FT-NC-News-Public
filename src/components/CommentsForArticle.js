import React, { Component } from 'react';
import PostCommentForArticle from './PostCommentForArticle'
import axios from 'axios';
import './Comments.css'

class CommentsForArticle extends Component {
  render() {
    return (
      <div>
        <h3 id="comments-title">Comments</h3>
        {this.props.comments.map(comment => {
          return (
            <div key={comment._id} className="container" id="container-comments">
              <div className="row">
                <div className="col-sm">
                  {comment.created_by} said:
                </div>
                <div className="col-sm">
                  created on: {this.convertDate(comment.created_at)}
                </div>
              </div>
              <div className="row-combody">{comment.body}</div>
              <div className="row-belongsto">{comment.belongs_to}</div>
              <div className="row-votes">{comment.votes}
                <i className="far fa-thumbs-up" id="icon" onClick={() => {
                  this.incrementCommentVote(comment._id)
                  this.setState({ currCommentVote: comment.votes++ })
                }}></i>
                <i className="far fa-thumbs-down" id="icon" onClick={() => {
                  this.decrementCommentVote(comment._id)
                  this.setState({ currCommentVote: comment.votes-- })
                }}></i>
                <i className="far fa-times-circle" id="icon" onClick={() => this.deleteComment(comment._id)}></i>
              </div>
            </div>
          )
        })}
        <PostCommentForArticle
          article={this.props.article}
          comments={this.props.comments}
          func={this.props.func} />
      </div>
    );
  }
  incrementCommentVote = (id) => {
    axios
      .put(
        `https://ncnewsapp.herokuapp.com/api/comments/${id}?vote=up`,
        "mytoken",
        { headers: { "Content-Type": "text/plain" } }
      )
      .then(result => console.log(result))
      .catch(e => console.log(e));
    //insert error page component
  }
  decrementCommentVote = (id) => {
    axios
      .put(
        `https://ncnewsapp.herokuapp.com/api/comments/${id}?vote=down`,
        "mytoken",
        { headers: { "Content-Type": "text/plain" } }
      )
      .then(result => console.log(result))
      .catch(e => console.log(e));
    //insert error page component
  }
  deleteComment = (id) => {
    axios
      .delete(
        `https://ncnewsapp.herokuapp.com/api/comments/${id}`,
        "mytoken",
        { headers: { "Content-Type": "text/plain" } }
      )
      .then(result => {
        this.props.delFunc(id);
      })
      .catch(e => console.log(e));
  };

  convertDate = (date) => {
    let time = new Date(date).getTime();
    let todate = new Date(time).getDate();
    let tomonth = new Date(time).getMonth() + 1;
    let toyear = new Date(time).getFullYear();
    let original_date = `${tomonth}/${todate}/${toyear}`;
    return original_date;
  }

}
export default CommentsForArticle;
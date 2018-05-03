import React, { Component } from 'react';
import CommentsForArticle from './CommentsForArticle';
import axios from 'axios';
import './Article.css'


class Article extends Component {
  state = {
    article: [],
    comments: [],
    currCommentVote: 0,
    isCommentDeleted: false,
    currArticleVote: 0
  }
  componentDidMount() {

    this.getArticle();
    this.getCommentsForArticle();
  }
  render() {
    return (
      <div>
        {this.state.article.map(post => {
          return (
            <div key={post._id} className="jumbotron jumbotron-fluid">
              <div className="container" id="article-body">
                <h1 className="display-4">{post.title}</h1>
                <p className="lead">{post.body}</p>
                <hr />
                <div className="row">
                  <div className="col-sm" id="cell-one">
                    <small id="emailHelp" className="form-text text-muted">Votes:</small>
                    {post.votes}
                    <i className="far fa-thumbs-up" id="icon" onClick={() => {
                      this.incrementArticleVote(post._id);
                      this.setState({ currArticleVote: post.votes++ });
                    }}></i>
                    <i className="far fa-thumbs-down" id="icon" onClick={() => {
                      this.decrementArticleVote(post._id);
                      this.setState({ currArticleVote: post.votes-- });
                    }}></i>
                  </div>
                  <div className="col-sm" id="cell-three">
                    <small id="emailHelp" className="form-text text-muted">Created by:</small>
                    {post.created_by}
                  </div>
                  <div className="col-sm" id="cell-four">
                    <small id="emailHelp" className="form-text text-muted">Topic:</small>
                    {post.belongs_to}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <CommentsForArticle
          comments={this.state.comments}
          comVote={this.state.currCommentVote}
          article={this.state.article}
          func={this.isPosted}
          delFunc={this.deleteComment}
        />
      </div>
    );
  }
  getArticle = () => {
    const id = this.props.match.params.id;
    fetch(`https://ncnewsapp.herokuapp.com/api/articles/${id}`)
      .then(response => {
        let data = response.json();
        return data;
      })
      .then(data => this.setState({ article: data.result }))

  }
  incrementArticleVote = (id) => {
    axios
      .put(
        `https://ncnewsapp.herokuapp.com/api/articles/${id}?vote=up`,
        "mytoken",
        { headers: { "Content-Type": "text/plain" } }
      )
      .then(result => console.log(result))
      .catch(e => console.log(e));
    //insert error page component
  }
  decrementArticleVote = (id) => {
    axios
      .put(
        `https://ncnewsapp.herokuapp.com/api/articles/${id}?vote=down`,
        "mytoken",
        { headers: { "Content-Type": "text/plain" } }
      )
      .then(result => console.log(result))
      .catch(e => console.log(e));
    //insert error page component
  }
  getCommentsForArticle = () => {
    const id = this.props.match.params.id;
    fetch(`https://ncnewsapp.herokuapp.com/api/articles/${id}/comments`)
      .then(response => {
        let data = response.json();
        return data;
      })
      .then(data => this.setState({ comments: data.comments }))

  }
  isPosted = (data) => {
    this.setState(state => ({
      comments: [...this.state.comments, data]
    }))
  }
  deleteComment = (id) => {
    this.setState({
      comments: this.state.comments.filter((_, i) => _._id !== id)
    });
  };
};
export default Article;
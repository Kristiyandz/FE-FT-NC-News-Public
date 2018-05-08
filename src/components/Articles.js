import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import './Articles.css'

class Articles extends Component {
  state = {
    allArticles: [],
    isLoading: true
  }
  componentWillMount() {
    this.getAllArticles()
  }
  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <LoadingPage />
      );
    };
    return (
      <div>
        {this.state.allArticles.map(article => {
          return (
            <div key={article._id} className="container">
              <div className="row" id="article-title">
                <NavLink exact to={`/articles/${article._id}`} className="link">{article.title}</NavLink>
              </div>
              <div className="row">
                <div className="col-sm" id="cell">
                  <p>Votes</p>
                </div>
                <div className="col-sm" id="cell">
                  <p>Comments</p>
                </div>
                <div className="col-sm" id="cell">
                  <p>Created by</p>
                </div>
                <div className="col-sm" id="cell">
                  <p>Topic</p>
                </div>
              </div>
              <div className="row" id="row-articles">
                <div className="col-sm" id="cell">
                  <p>{article.votes}</p>
                </div>
                <div className="col-sm" id="cell">
                  <p>{article.comments}</p>
                </div>
                <div className="col-sm" id="cell">
                  <p>{article.created_by}</p>
                </div>
                <div className="col-sm" id="cell">
                  <p>{article.topic}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  getAllArticles = () => {
    fetch('https://ncnewsapp.herokuapp.com/api/articles')
      .then(response => {
        let data = response.json();
        return data;
      })
      .then(data => this.setState({ allArticles: data.articles, isLoading: false }))
  };
};
export default Articles;
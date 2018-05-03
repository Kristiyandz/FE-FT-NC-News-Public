import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './ArticlesByTopic.css';

class ArticlesByTopic extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Browse Articles</h1>
          <div>
            {this.props.articles.map((article, i) => {
              return (
                <div key={article._id} id="article-list">
                  <NavLink exact to={`/articles/${article._id}`}><p id="title">{`${i + 1}. `}{article.title}</p></NavLink>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
};
export default ArticlesByTopic;

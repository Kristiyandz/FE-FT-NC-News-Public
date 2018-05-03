import React, { Component } from 'react';
import SelectedArticle from './SelectedArticle';


class SelectArticle extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Browse Articles</p>
          {this.props.props.articles.map(article => {
            if (article._id === this.props.articleID) {
              return (
                <div key={article._id}>
                  <SelectedArticle
                    singleArticle={article}
                    {...this.props}
                  />
                </div>
              )
            }
          })}
        </div>
      </div>
    );
  }
};

export default SelectArticle;
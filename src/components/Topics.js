import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArticlesByTopic from './ArticlesByTopic';

class Topics extends Component {
  state = {
    topics: [],
    currentTopic: '',
    articlesByTopic: []
  }
  componentDidMount() {
    this.getAllTopics();
  }
  render() {
    return (
      <div>
        <h2>Choose a topic</h2>
        {this.state.topics.map(topics => {
          return (
            <div key={topics._id}>
              <ul>
                <li>
                  <Link to={`${this.props.match.url}/${topics.slug}/articles`} onClick={() =>
                    this.getArticlesBtTopic(topics.slug)} value={topics.slug}>{topics.title}</Link>
                </li>
              </ul>
            </div>
          );
        })}
        <ArticlesByTopic articles={this.state.articlesByTopic} />
      </div>
    );
  };
  getAllTopics = () => {
    fetch('https://ncnewsapp.herokuapp.com/api/topics')
      .then(response => {
        let data = response.json();
        return data;
      })
      .then(data => this.setState({ topics: data.topics }));
  };
  getArticlesBtTopic = (topic) => {

    fetch(`https://ncnewsapp.herokuapp.com/api/topics/${topic}/articles`)
      .then(response => {
        let data = response.json();
        return data;
      })
      .then(data => this.setState({ articlesByTopic: data.articles }));
  };
};
export default Topics;
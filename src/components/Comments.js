import React, { Component } from 'react';

class Comments extends Component {
  render() {
    return (
      <div>
        <h1>All comments:</h1>
        {this.props.comments.map(comment => {
          return (
            <div class="jumbotron">
              <h1 class="display-4">{comment.created_by.username}</h1>
              <p class="lead">{comment.body}</p>
              <hr class="my-4" />
              <p>Votes: {comment.votes}</p>
            </div>
          );
        })}
      </div>
    );
  }
};


export default Comments;
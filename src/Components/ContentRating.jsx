import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = { likes: 0, dislikes: 0, totalRating: 0 }
  }
  
  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
      totalRating: prevState.totalRating + 1
    }));
  }
  handleDislike = () => {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
      totalRating: prevState.totalRating + 1
    }));
  }

  render() {
    return (
      <>
        <h1>Content Rating</h1>
        <div className='content-rating'>
          <p>Text</p>
          <div className='raing-buttons'>
            <button className='like-button' onClick={this.handleLike}> 
              Like ({this.state.likes}) 
            </button>
            <button className='dislike-button' onClick={this.handleDislike}> 
              Dislike ({this.state.dislikes}) 
            </button>
          </div>
          <p>Total Rating: {this.state.totalRating}</p>
        </div>     
      </>
    );
  }
}

export default ContentRating;

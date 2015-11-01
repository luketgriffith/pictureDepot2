import React from 'react';
import showHome from './home_page';

export default React.createClass({

  gohome(){
    this.props.goback();
  },
  remove(){
    this.props.deleteImg();
  },
  thumbnail(image){
 
  },
  thumbTitle(image){

  },
  cap(image){

  },
  likes(image){

  },
  likeIt(){
    this.props.likePic();
  },
  edit(id){
    this.props.editPost(id);
  },
  render() {
    return (
      <div className= 'chimichangas'>
        <h2>@{this.props.thumbTitle}</h2>
        <img src={this.props.thumbnail} />
        <span className='likesSpan'>Likes: {this.props.likes}</span>
        <p>{this.props.cap}</p>
        <button onClick={this.likeIt}><i className="fa fa-heart"></i>Like</button>
        <button onClick={this.gohome}>Go Back</button>
        <button onClick={(event)=>this.edit()}>Edit Post</button>
        <button onClick={this.remove}>Delete Photo</button>
      </div>
    );
  }

});

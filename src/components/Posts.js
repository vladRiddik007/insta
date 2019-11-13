import React, { Component } from "react";
import InstaService from "../services/instaService";
import User from './User';
import ErrorMessage from './Error';

export default class Posts extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    error: false
  };

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.InstaService.getAllPosts()
      .then(this.onPostsLoaded)
      .catch(this.onError);
  }

  onPostsLoaded = (posts) => {
    this.setState({
      posts,
      error: false
    });
  };

  onError = () => {
    this.setState({
      error: true
    });
  };

  renderItems(arr) {
    return arr.map(item => {
      const { name, altname, photo, src, alt, descr, id } = item;

      return (
        <div key={id} className="post">
          <User
            src={photo}
            alt={altname}
            name={name}
            min
          />
          <img src={src} alt={alt}></img>
          <div className="post__name">{name}</div>
          <div className="post__desrc">{descr}</div>
        </div>
      );
    });
  }

  render() {
      const {error, posts} = this.state;

      if(error) {
          return <ErrorMessage/>
      }

      const items = this.renderItems(posts);
    return (
      <div className="left">
        {/* <Post src="https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg" 
                alt="inst"/>
                <Post src="https://bipbap.ru/wp-content/uploads/2017/08/16.jpg" 
                alt="sec"/> */}
                {items}
      </div>
    );
  }
}

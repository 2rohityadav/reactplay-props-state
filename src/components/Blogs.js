import React, { Component } from "react";
import BlogPost from "./BlogPost";

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Blogs"
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <BlogPost />
      </div>
    );
  }
}

export default Blogs;

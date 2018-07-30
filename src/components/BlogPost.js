import React, { Component } from "react";
import PostData from "../data/data.json";
import PostDetial from "./PostDetial";

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Blog Post",
      showContentBlogPost: false,
      postList: []
    };
  }

  postClicked(e) {
    console.log(e);
  }

  toggleContentBlogPost() {
    console.log("toggleContentBlogPost");
    this.setState({
      showContentBlogPost: !this.state.showContentBlogPost
    });
  }

  componentDidMount = () => {
    this.setState({
      postList: PostData
    });
  };

  render() {
    const { title, showContentBlogPost, postList } = this.state;
    return (
      <div style={{ border: "1px solid tomato" }}>
        <h1>{title}</h1>
        {postList.map((post, i) => {
          return (
            <PostDetial
              post={post}
              key={`${i}`}
              postClicked={e => this.postClicked(e)}
              toggleContentBlogPost={() => this.toggleContentBlogPost()}
              showContentBlogPost={showContentBlogPost}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogPost;

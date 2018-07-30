// rce, rconst
import React, { Component } from "react";

export class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent: false,
      _post: {}
    };
  }

  titleClicked(e) {
    const { post, postClicked } = this.props;
    console.log(post.title);

    // const newPostItem = {
    //   title: "New Awesome! title",
    //   content: this.state._post.content
    // };

    // this.setState({
    //   _post: newPostItem
    // });

    postClicked("Title Clicked - Another way using method props");
  }

  toggleContent() {
    console.log("toggle content");
    this.setState({
      showContent: !this.state.showContent
    });
  }

  // converting props to state
  componentDidMount = () => {
    const { post } = this.props;
    this.setState({
      _post: post
    });
  };

  render() {
    // conver post from props to state
    const { post, toggleContentBlogPost, showContentBlogPost } = this.props;
    const { _post } = this.state;
    const { showContent } = this.state;

    return (
      <div style={{ border: "1px solid black", margin: "5px 0" }}>
        {
          <div>
            <h4 onClick={e => this.titleClicked(e)}>{_post.title}</h4>
            <button onClick={() => this.toggleContent()}>
              Toggle {post.title} using State
            </button>
            {showContent === true ? (
              <div>
                <p>{post.description}</p>
                <p>{post.content}</p>
              </div>
            ) : (
              ""
            )}
            {showContentBlogPost === true ? <p>{post.published}</p> : ""}
            <button onClick={toggleContentBlogPost}>
              Toggle {post.title} using Props
            </button>
          </div>
        }
      </div>
    );
  }
}

export default PostDetail;

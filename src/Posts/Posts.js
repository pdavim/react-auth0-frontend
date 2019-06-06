import React from "react";
import API from "../URL";
import { Panel, ControlLabel, Glyphicon, Image } from "react-bootstrap";
import { Badge, Button } from "react-bootstrap";
import AddPost from "../AddPost/AddPost";
import axios from "axios";

class Posts extends React.Component {
  link = API.aURL;

  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: [],
      open: false
    };
  }

  componentDidMount() {
    let postUrl = API.aURL;

    axios.get(postUrl).then(res => {
      const persons = res.data;
      console.log("my persons ", res.data);
      this.setState({ posts: res.data });
    });
  }

  render() {
    let listposts = this.state.posts.map((post, index) => {
      return (
        <div key={index} className="col-sm-12 col-md-4 col-lg-4">
          <div
            className="card text-white mb-3"
            dangerouslySetInnerHTML={{
              __html: post.title.rendered.toUpperCase()
            }}
          />
          <Image src={post.fimg_url} thumbnail />
          <p>
            {typeof post.tag_names == "object" ? (
              <p>
                {post.tag_names.map((tagArray, k) => (
                  <a href="https://pdavim.com/tag/$tagArray">
                    <Button
                      href="<?php echo get_tag_link($tag_id); ?>"
                      variant="secondary"
                      size="sm"
                    >
                      {tagArray}
                    </Button>
                  </a>
                ))}
              </p>
            ) : null}
          </p>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered
            }}
          />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <p>{listposts}</p>
        </div>
      </div>
    );
  }
}

export default Posts;

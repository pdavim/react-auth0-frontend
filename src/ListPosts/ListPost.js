import React from "react";
import API from "../URL";
import { Table } from "react-bootstrap";

class ListPost extends React.Component {
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
    fetch(postUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data
        });

        console.log("my data", data);
      });
  }

  updatePost(index) {
    console.log("-------------------------");
    console.log("You Have Updated the Post");
    console.log("This is just a console log....");
    console.log("Waiting for some code");
    console.log(this.index);
    console.log("-------------------------");
  }

  render() {
    let postlist = this.state.posts.map((post, index) => {
      return (
        <tr key={index} className="table table-striped" striped bordered hover>
          <td>{index + 1}</td>
          <td>{post.title.rendered}</td>
          <td>
            <span
              key="index"
              className="glyphicon glyphicon-pencil"
              onClick={this.updatePost.bind(this, post._id, this.index)}
            />
          </td>
          <td>
            <span className="glyphicon glyphicon-remove" />
          </td>
        </tr>
      );
    });
    return (
      <div>
        <Table striped bordered hover className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Title</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>{postlist}</tbody>
        </Table>
      </div>
    );
  }
}

export default ListPost;

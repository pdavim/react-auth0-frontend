import React, { Component } from "react";
import axios from "axios";
import { Router, hashHistory } from "react-router";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.state = {
      title: "",
      subject: "",
      image: null,
      imagePreviewUrl: null
    };
  }
  componentDidMount() {
    //document.getElementById("addHyperLink").className = "active";
    //document.getElementById("homeHyperlink").className = "";
  }
  addPost() {
    axios
      .post("/addPost", {
        title: this.state.title,
        subject: this.state.subject
      })
      .then(function(response) {
        console.log("reponse from add post is ", response);
        // Router.push("/");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleSubjectChange(e) {
    this.setState({ subject: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.itemAdd;
    this.props.createItem({
      name: form.name.value,
      image: this.state.image
    });
    // Clear the form and state for the next input.
    form.name.value = "";
    this.state.image = null;
    this.state.imagePreviewUrl = null;
  }

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} className={"img-preview"} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an image.</div>
      );
    }
    return (
      <div className="col-md-5">
        <div className="form-area">
          <form role="form">
            <br styles="clear:both" />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Title"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                type="textarea"
                id="subject"
                placeholder="Subject"
                maxlength="full"
                rows="14"
              />
            </div>

            <div className="form-group">
              <input type="file" onChange={e => this.handleImageChange(e)} />
              <div className="img-preview">{$imagePreview}</div>
            </div>

            <button
              type="button"
              id="submit"
              name="submit"
              className="btn btn-primary pull-right"
            >
              Add Post
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPost;

import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";

import NavBar from "./NavBar/NavBar";

import "./App.css";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  listposts() {
    this.props.auth.listposts();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">PDAVIM - WORDPRESS</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, "home")}
            >
              Home
            </Button>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, "questions")}
            >
              Questions
            </Button>
            {!isAuthenticated() && (
              <Button
                id="qsLoginBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.login.bind(this)}
              >
                Log In
              </Button>
            )}
            {isAuthenticated() && (
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, "profile")}
              >
                Profile
              </Button>
            )}
            {isAuthenticated() && (
              <Button
                id="qsLogoutBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.logout.bind(this)}
              >
                Log Out
              </Button>
            )}
            {isAuthenticated() && (
              <Button
                id="qsLogoutBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, "listposts")}
              >
                List Posts
              </Button>
            )}
            {isAuthenticated() && (
              <Button
                id="addHyperLink"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, "addpost")}
              >
                Add Post
              </Button>
            )}
          </Navbar.Header>
        </Navbar>

        <NavBar />

        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Panel, ControlLabel, Glyphicon } from "react-bootstrap";
import "./Profile.css";

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    console.log(profile);
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.nickname}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel>
                <Glyphicon glyph="user" /> Name
              </ControlLabel>
              <h3>{profile.name}</h3>
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;

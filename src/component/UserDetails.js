import React, { Component } from "react";
import "../css/UserDetails.scss";
import "./data";
/*<div className="user-details" >
                {this.props.name}
                {this.props.dob}
            </div>*/

class UserDetails extends Component {
  render() {
    console.log(this.props, "props");
    return (
      <div className="outer-wrapper1">
        <div className="top">
          <div className="user_image">
            <img src={this.props.img} />
          </div>

          <div className="name-center">
            <div className="name">{this.props.name}</div>
            <div className="address">{this.props.address}</div>
          </div>
        </div>
        <div className="text-detail">
          <div className="left">Nickname:</div>
          <div className="right">{this.props.nickname}</div>
        </div>

        <div className="text-detail">
          <div className="left">Tel:</div>
          <div className="right">{this.props.tel}</div>
        </div>

        <div className="text-detail">
          <div className="left">Date Of Birth:</div>
          <div className="right">{this.props.dob}</div>
        </div>

        <div className="text-detail">
          <div className="left">Gender:</div>
          <div className="right">{this.props.gender}</div>
        </div>

        <div className="text-detail">
          <div className="left">Language:</div>
          <div className="right">{this.props.languagae}</div>
        </div>
      </div>
    );
  }
}

export default UserDetails;

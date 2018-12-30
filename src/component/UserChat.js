import React, { Component } from "react";
import "../css/UserChat.scss";
import "./data";
class UserChat extends Component {
  render() {
    console.log(this.props, "props");
    return (
      <div className="outer-wrap">
        <div className="is_typing">
          <span className="left">
            <span className="username">{this.props.name} </span>
            <span className="type">is typing...</span>
          </span>
          <span className="three_icons right">
            {" "}
            <ion-icon name="star-outline" class="right-icon" />
            <ion-icon name="call" class="right-icon" />
            <ion-icon name="chatbubbles" class="right-icon" />
          </span>
        </div>

        <div className="chat_space1">
          <div className="message_1">
            <div className="sender_img">
              <img className="pic_sender" src={this.props.img1} />
            </div>
            <div className="sender_msg1">{this.props.message1}</div>
          </div>
          <div className="message_2">
            <div className="receiver_msg1">{this.props.message2}</div>
            <div className="receiver_img">
              <img className="pic_receiver" src={this.props.img2} />
            </div>
          </div>
        </div>

      
      </div>
    );
  }
}

export default UserChat;

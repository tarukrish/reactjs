import React from "react";
import "../css/inner.scss";
import data from "./data";
import "./chatdata";
import UserComponent from "./UserComponent";
import UserDetails from "./UserDetails";
import UserChat from "./UserChat";

class Column1 extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
      data: [],
      chatdata: [],
      whatsapp: false,
      gmail: true,
      skype: false,
      insta: false,
      index: null,
      selectedData: {}
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.clickItem = this.clickItem.bind(this);
    this.clickIndex = this.checkIndex.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  componentDidMount() {
    console.log("datata", data);
    this.setState({ data: data });
  }

  clickItem(args) {
    if (args === "whatsapp") {
      this.setState({
        whatsapp: true,
        gmail: false,
        skype: false,
        insta: false
      });
    } else if (args === "gmail") {
      this.setState({
        whatsapp: false,
        gmail: true,
        skype: false,
        insta: false
      });
    } else if (args === "skype") {
      this.setState({
        whatsapp: false,
        gmail: false,
        skype: true,
        insta: false
      });
    } else if (args === "insta") {
      this.setState({
        whatsapp: false,
        gmail: false,
        skype: false,
        insta: true
      });
    }
  }

  checkIndex(e, index) {
    e.preventDefault();
    e.stopPropagation();
    console.log("indexxxxx", index);
    this.setState({ index: index });
  }

  /* cheCKIndex(i, item){
            i.preventDefault();
            i.stopPropagation();
            console.log("item", item)
            this.setState({item: item})

        }*/

  render() {
    return (
      <div className="columns">
        <div className="col1">
          <div className="menu">
            {" "}
            <ion-icon name="menu" />
          </div>

          <div
            className="icon whatsapp"
            onClick={() => this.clickItem("whatsapp")}
          >
            <ion-icon name="logo-whatsapp" />{" "}
          </div>
          <div className="icon gmail" onClick={() => this.clickItem("gmail")}>
            <ion-icon name="mail" />
          </div>
          <div className="icon skype" onClick={() => this.clickItem("skype")}>
            <ion-icon name="logo-skype" />
          </div>
          <div
            className="icon instagram"
            onClick={() => this.clickItem("insta")}
          >
            <ion-icon name="logo-instagram" />
          </div>
          <div className="icon others">
            <ion-icon name="add-circle" />
          </div>

          {/* <col2 content={<ion-icon name="logo-whatsapp" />} />
          <col2 name={"whatsapp"} />
          <col2 content={<ion-icon name="mail" />} />
          <col2 name={"gmail"} />
          <col2 content={<ion-icon name="logo-skype" />} />
          <col2 name={"skype"} />
          <col2 content={<ion-icon name="logo-instagram" />} />
          <col2 name={"instagram"} />
          <col2 content={<ion-icon name="add-circle" />} />
          <col2 name={"others"} /> */}
        </div>

        <div className="col2">
          <div className="inbox">
            Inbox <ion-icon name="person" />
          </div>
          {/* <li name={this.name}>{ this.content} </li> */}
          {this.state.gmail && (
            <div>
              <div className="gmail-row-content">
                <span className="left">ALL </span>{" "}
                <span className="right"> 89</span>
              </div>

              <div className="gmail-row-content">
                <span className="left">Messages </span>{" "}
                <span className="right">11 </span>
              </div>

              <div className="gmail-row-content">
                <span className="left">Unread </span>{" "}
                <span className="right">4</span>
              </div>

              <div className="gmail-row-content">
                <span className="left">Important </span>{" "}
                <span className="right">1</span>
              </div>

              <div className="gmail-row-content">
                <span className="left">Media </span>{" "}
                <span className="right">4</span>
              </div>

              <hr />

              <div className="gmail-row-content">
                <span className="left">Teams </span>{" "}
                <span className="right">2</span>
              </div>
              <div className="gmail-row-content">
                <span className="left">Groups </span>{" "}
                <span className="right">5</span>
              </div>
              <div className="gmail-row-content">
                <span className="left">Channels </span>{" "}
                <span className="right">8</span>
              </div>
              <div className="gmail-row-content">
                <span className="left">Locations </span>{" "}
                <span className="right"> </span>
              </div>
              <div className="gmail-row-content">
                <span className="left">Media </span>{" "}
                <span className="right">4</span>
              </div>
              <hr />
              <div className="gmail-row-content">
                <span className="left">Help</span>
                <span className="right">
                  <ion-icon name="help" />
                </span>
              </div>
              <div className="gmail-row-content">
                <span className="left">settings</span>
                <span className="right">
                  <ion-icon name="settings" />
                </span>
              </div>
            </div>
          )}

          {this.state.whatsapp && (
            <div className="whats_app_function">
              <ion-icon name="checkmark" />
              sent-messages
              <div>
                <ion-icon name="done-all" />
                received-messages
              </div>
            </div>
          )}

          {this.state.skype && (
            <div>
              <ion-icon name="people" />
              Group-Chat
              <div>
                <ion-icon name="person" />
                Personal-chat
              </div>
            </div>
          )}

          {this.state.insta && (
            <div>
              <ion-icon name="contacts" />
              Followers
              <div>
                <ion-icon name="walk" />
                Following
                <div>
                  <ion-icon name="pricetags" />
                  Tags
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="col3" style={{ color: "#fff" }}>
          <div className="name">
            <div className="search">
              
                {/* <ion-icon name="search" className="search-icon"/> */}
                <input type="search" placeholder="search here" />
              
            </div>

            {this.state.data &&
              this.state.data.map((element, index) => {
                return (
                  <div onClick={e => this.checkIndex(e, index)}>
                    <UserComponent
                      name={element.name}
                      img={element.img}
                      text={element.text}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col4">
          {this.state.data && this.state.index && (
            <UserChat
              name={this.state.data[this.state.index].name}
              img1={this.state.data[this.state.index].img1}
              img2={this.state.data[this.state.index].img2}
              message1={this.state.data[this.state.index].message1}
              message2={this.state.data[this.state.index].message2}
              message3={this.state.data[this.state.index].message3}
              message4={this.state.data[this.state.index].message4}
              message5={this.state.data[this.state.index].message5}
            />
          )}

           <div className="typing">
              
              {/* <ion-icon name="search" className="search-icon"/> */}
              <ion-icon ios="ios-attach" md="md-attach"></ion-icon>  <input type="typing" placeholder="type here....."  /><ion-icon name="logo-snapchat"></ion-icon>  <ion-icon name="send"></ion-icon>
            
          </div>
        </div>

        <div className="col5">
          <div className="col5_line1">
            <div className="alrm">
              {" "}
              <ion-icon name="notifications-outline" />
            </div>
            {/* <div className="johan">
              <select name="johan Horn">johan Horn</select>
              <option value="tarus" />
            </div> */}
          </div>
          <div className="col5_line2">
            <div className="ion">
              <ion-icon name="mail-unread" />
            </div>
            <div className="ion">
              <ion-icon name="information" />
            </div>
          </div>
          {this.state.data && this.state.index && (
            <UserDetails
              img={this.state.data[this.state.index].img}
              name={this.state.data[this.state.index].name}
              address={this.state.data[this.state.index].address}
              nickname={this.state.data[this.state.index].nickname}
              tel={this.state.data[this.state.index].tel}
              dob={this.state.data[this.state.index].dob}
              gender={this.state.data[this.state.index].gender}
              languagae={this.state.data[this.state.index].languagae}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Column1;

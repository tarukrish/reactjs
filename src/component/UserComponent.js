import React, {Component} from "react";
import  "./data";
import "../css/UserComponent.scss";
class UserComponent extends Component{
    render(){
        return      (
            
            <div className="outer-wrapper">
                <div className="image">
                    <img src={this.props.img}></img>
                </div>
                <div className="name-text">
                    <div className="name">
                        {this.props.name}
                    </div>
                    <div className="text">
                        {this.props.text}
                    </div>
                </div>
                <div className="option">
                    <div className="option-icon">
                    <ion-icon name="more"></ion-icon>
                    </div>
                    <div className="time">
                        5 mins
                    </div>
                </div>
            </div>
            
        );
    }
}

export default UserComponent;
import React from "react";
import "./styles.css";
export default class Profile extends React.Component {
  obj = this.props.obj;

  render() {
    return (
      <div className="Profile">
        {Object.keys(this.obj).map((key, i) => {
          if (
            key != "address" &&
            key != "company" &&
            key != "id" &&
            key != "profilepicture" &&
            key != "name"
          ) {
            return (
              <div>
                <span>{key} : </span>
                <span>{this.obj[key]}</span>
              </div>
            );
          }
          if (key == "name") {
            return (
              <div>
                <span>{this.obj[key]}</span>
              </div>
            );
          }
          if (key == "profilepicture") {
            return <img src={this.obj.profilepicture} alt="" id="image" />;
          }
        })}
      </div>
    );
  }
}

/*
      
      */

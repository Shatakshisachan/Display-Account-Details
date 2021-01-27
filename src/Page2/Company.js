import React from "react";
import "./styles.css";

export default class Company extends React.Component {
  obj = this.props.obj;

  render() {
    return (
      <div className="Company">
        {Object.keys(this.obj.company).map((key, i) => {
          return (
            <div>
              <span>{key} : </span>
              <span>{this.obj.company[key]}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

/*
      
      */

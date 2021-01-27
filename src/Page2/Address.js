import React from "react";
import "./styles.css";

export default class Address extends React.Component {
  obj = this.props.obj;

  render() {
    return (
      <div className="Address">
        {Object.keys(this.obj.address).map((key, i) => {
          if (key != "geo") {
            return (
              <div>
                <span>{key} : </span>
                <span>{this.obj.address[key]}</span>
              </div>
            );
          }
          if (key == "geo") {
            <Map
              google={this.props.google}
              zoom={14}
              initialCenter={{
                lat: this.obj.address.geo.lat,
                lng: this.obj.address.geo.lng
              }}
            />;
          }
        })}
      </div>
    );
  }
}

/*
      
      */

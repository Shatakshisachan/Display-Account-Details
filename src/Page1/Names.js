import React from "react";
import "./styles.css";
import axios from "axios";
import App from "../Page2/App";
export default class Names extends React.Component {
  state = {
    persons: [],
    obj: {},
    page: 1
  };
  componentDidMount() {
    axios.get(`https://panorbit.in/api/users.json`).then((res) => {
      this.setState({
        persons: res.data.users,
        obj: this.state.obj,
        page: this.state.page
      });
    });
  }
  nextPage(obj) {
    this.setState({ persons: this.state.persons, obj: obj, page: 2 });
  }
  render() {
    if (this.state.page == 1) {
      return (
        <div>
          <div className="heading">
            <h1>Select an account</h1>
          </div>
          <ul>
            {this.state.persons.map((person) => (
              <li onClick={() => this.nextPage(person)}>
                <img src={person.profilepicture} alt="" /> {person.name}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <App obj={this.state.obj} />;
    }
  }
}

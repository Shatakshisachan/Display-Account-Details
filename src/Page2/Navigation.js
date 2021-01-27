import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Profile_page1 from "./Profile_page1";
import Profile_page2 from "./Profile_page2";
import Profile_page3 from "./Profile_page3";
import Profile_page4 from "./Profile_page4";
export default class Profile extends React.Component {
  render() {
    return (
      <Router>
        <div className="Nav">
          <Link to="/">Profile</Link>
          <hr />
          <Link to="/post">Post</Link>
          <hr />
          <Link to="/gallery">Gallery</Link>
          <hr />
          <Link to="todo">ToDo</Link>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Profile_page1 obj={this.props.obj} {...props} />
            )}
          />
          } />
          <Route exact path="/post" component={Profile_page2} />
          <Route exact path="/gallery" component={Profile_page3} />
          <Route exact path="/todo" component={Profile_page4} />
        </Switch>
      </Router>
    );
  }
}

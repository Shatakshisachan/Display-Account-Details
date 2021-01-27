import "./styles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navigation from "./Navigation";
export default function App(props) {
  return (
    <div className="App">
      <Navigation obj={props.obj} />
    </div>
  );
}

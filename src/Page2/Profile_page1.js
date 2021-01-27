import "./styles.css";
import Company from "./Company";
import Profile from "./Profile";
import Address from "./Address";
export default function Profile_page1(props) {
  return (
    <div className="Profile_Page1">
      <h className="headP">Profile</h>
      <Profile obj={props.obj} />
      <div className="vLine"></div>
      <h className="headC">Company</h>
      <Company obj={props.obj} />
      <h className="headA">Address</h>
      <Address obj={props.obj} />
    </div>
  );
}
/*
session.store(key,value)
function in parent element
*/

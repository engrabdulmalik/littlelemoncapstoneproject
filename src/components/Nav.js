import "../assets/css/nav.css";
import logo from "../assets/images/Logo .svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="container1">
      <div>
        <img className="imgcard" src={logo} alt="here" />
      </div>
      <div>
        <ul>
          <li>
            <Link className="my-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="my-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="my-link" to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="my-link" to="/booking">
              Reservations
            </Link>
          </li>
          <li>
            <Link className="my-link" to="/order">
              Order Online
            </Link>
          </li>
          <li>
            <Link className="my-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

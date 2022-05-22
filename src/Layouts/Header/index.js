import { Link } from "react-router-dom";
import { Dropdown } from "bootstrap";
import { useRef } from "react";
import "./style.css";

const Nav = () => {
  const dropdown = useRef();

  return (
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav gap-3 me-auto mb-2 mb-lg-0 d-flex flex-lg-row justify-content-lg-end w-100">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            About
          </Link>
        </li>
        <li
          className="nav-item dropdown border-0"
          onMouseEnter={(e) => {
            const btn = new Dropdown(dropdown.current);
            btn.toggle();
          }}
          onMouseLeave={(e) => {
            const btn = new Dropdown(dropdown.current);
            btn.hide();
          }}
        >
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            ref={dropdown}
            id="navbarDarkDropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Academics
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="navbarDarkDropdownMenuLink"
          >
            <li>
              <Link className="dropdown-item" to="#">
                News
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Academic Calender
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                School Administration
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Events
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallery">
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/educators">
            Educators
          </Link>
        </li>
        <li className="nav-item px-lg-4">
          <button className="btn btn-lg btn-primary rounded-pill" to="#">
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav
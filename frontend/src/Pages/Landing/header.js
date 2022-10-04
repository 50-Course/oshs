import { Link } from "react-router-dom";
import "./header.css";
import NavBar from '../../Layouts/Header/index'; 

const Header = () => {
  return (
    <header className="d-flex flex-column py-5">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h1 className="text-primary">
              OSHS
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavBar />
        </div>
      </nav>
      <main className="my-auto container">
        <div className="d-flex flex-row">
          <div className="col-lg-4 d-none d-lg-block">
          </div>
          <div className="col-lg-8 col-12">
            <h1 className="text-white fw-light display-5">
              WELCOME TO <span className="text-primary">OSHODI SENIOR HIGH SCHOOL</span>
            </h1>
            <p className="text-white py-4 fs-5">
              Let us think of education as the means of developing our greatest abilities, 
              because in each of us there is a private hope and dream which, fulfilled, 
              can be translated into benefit for everyone and greater strength for our nation. (John F. Kennedy)
            </p>
            <Link to='#/' className="btn btn-lg bg-transparent btn-animated btn-white text-white px-5 py-3 border border-white">Take A Tour</Link>
          </div>
        </div>
      </main>
    </header>
  );
};


export default Header;
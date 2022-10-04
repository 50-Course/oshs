import { Link } from "react-router-dom";
// import "./header.css";
import NavBar from '../../Layouts/Header/index'; 


const Header = () => {
  return (
    <header className="d-flex flex-column py-5" style={{minHeight: '50vh'}}>
      <nav className="navbar navbar-expand-lg navbar-light" >
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
      <main className="my-auto container text-center">
        <div className="">
          <h1 className="text-white fw-light display-5 text-primary">
            Our Passionate Teachers
          </h1>
        </div>
      </main>
    </header>
  );
};

export default Header;
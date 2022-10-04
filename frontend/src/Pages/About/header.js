import { Link } from "react-router-dom";
import NavBar from '../../Layouts/Header/index'; 


const Header = () => {
  return (
    <header className="d-flex flex-column py-5" style={{minHeight: '70vh'}}>
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
      <main className="my-auto container text-center">
        <div>
          <h1 className="text-white fw-light display-5 text-primary">
            We are determined to achieve the highest standards 
            <br />
            <small className="fw-lighter text-white"> in everything that we do.</small>
          </h1>
        </div>
      </main>
    </header>
  );
};

export default Header;
import { Link } from "react-router-dom"
import './style.css'
const Footer = () =>  {
  return (
    <footer className="container-fluid px-0">
      <div className="d-flex flex-md-row flex-column text-center text-md-start gap-3 px-2 py-4">
        <div className="flex-fill d-flex flex-column">
          <Link to={'/'} className="text-decoration-none text-center my-auto mx-auto">
            <h1>OSHS</h1>
          </Link>
        </div>
        <div className="flex-fill">
          <h2 className="mb-3">Usefull Links</h2>
          <ul className="bg-transparent p-0 gap-2 d-flex flex-column" style={{listStyle: 'none'}}>
            <li className="">
              <Link to={'/educators'} className="text-decoration-none">Educators</Link>
            </li>
            <li className="">
              <Link to={'/events'} className="text-decoration-none">Events</Link>
            </li>
            <li className="">
              <Link to={'#'} className="text-decoration-none">News</Link>
            </li>
            <li className="">
              <Link to={'#'} className="text-decoration-none">Academic Calender</Link>
            </li>
            <li className="">
              <Link to={'/schooladmin'} className="text-decoration-none">School Administration</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column flex-fill">
          <h2>Socials</h2>
          <div className="d-flex flex-row justify-content-center justify-content-md-start gap-3 my-3">
            <a href="/#">
              <i className="bi bi-facebook fs-3 btn-animated text-secondary"></i>
            </a>
            <a href="/#">
              <i className="bi bi-instagram fs-3 btn-animated text-secondary"></i>
            </a>
            <a href="/#">
              <i className="bi bi-linkedin fs-3 btn-animated text-secondary"></i>
            </a>
          </div>
          <span>
            <i className="bi bi-geo-alt-fill mx-2"></i>
            lorem ipsum lagdir vasit noriem ligha na supium
          </span>
          <span>
            <i className="bi bi-envelope mx-2"></i>
            <a href="mailto: example@gmail.com" className="text-decoration-none">example@gmail.com</a>
          </span>
          <span>
            <i className="bi bi-telephone-fill mx-2"></i> 
            <a href="tel:+234 8000 0000" className="text-decoration-none">+234 8000 0000</a>
          </span>
        </div>
      </div>
      <div className="py-3 w-100 bg-dark">
        <p className="text-center w-100 my-auto text-white">Copyright 2022 | ALL RIGHTS RESERVED ©</p>
      </div>
    </footer>
  )
}

export default Footer
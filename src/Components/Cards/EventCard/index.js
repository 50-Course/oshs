import { Link } from 'react-router-dom'
import './style.css'

const EventCard =  (props) => {
  
  return (
    <div className="card px-0 flex-fill">

      <img src="..." className="card-img-top" alt="..." />

      <div className="card-body">
        <h5 className="card-title">Five Simple & Easy Steps To Choose Future Career</h5>
        <p>
          <i class="bi bi-calendar-week mx-3"></i>
          Jan Thu, 2023
        </p>
        <p className="card-text text-muted fw-light">
          Elit minim aliqua sunt consequat sunt. 
          Ea incididunt ex proident excepteur sit commodo est do incididunt veniam est laborum consectetur. 
          Aute deserunt tempor magna occaecat pariatur veniam dolor duis. 
        </p>
        <Link to="/#" className="btn btn-primary w-100 btn-animated text-white shadow fs-4 p-3 text-decoration-none">
          Learn More...
        </Link>
      </div>

    </div>
  )
}

export default EventCard
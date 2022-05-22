import { Link } from 'react-router-dom'
import './style.css'

const NewsCard =  (props) => {
  
  return (
    <div className="card px-0 flex-fill">

      <div className='bg-transparent my-4'>
        <div className='d-flex flex-lg-row flex-row flex-md-column justify-content-around'>
          <span>
            <img src='...' width="100" height="100" className='bg-light border border-transparent rounded-circle' alt='...' />
          </span>
          <small>
            Karem Laogun
          </small>
          <small className='text-muted'>
            May 10
          </small>
        </div>
      </div>

      <img src="..." className="card-img-top" alt="..." />

      <div className="card-body">
        <h5 className="card-title">Five Simple & Easy Steps To Choose Future Career</h5>
        <p className="card-text text-muted fw-light">
          Elit minim aliqua sunt consequat sunt. 
          Ea incididunt ex proident excepteur sit commodo est do incididunt veniam est laborum consectetur. 
          Aute deserunt tempor magna occaecat pariatur veniam dolor duis. 
        </p>
        <Link to="/#" className="text-primary text-decoration-none">Read More...</Link>
      </div>

    </div>
  )
}

export default NewsCard
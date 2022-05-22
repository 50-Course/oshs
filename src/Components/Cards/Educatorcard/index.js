import './style.css'


const EducatorCard = () => {
  return (
    <div className='educatorCard card p-0 w-100 h-100 border'>
      <img src="..." alt="..." className="card-img bg-transparent" />
      <div className='educator-info card-img-overlay py-5 px-3 align-self-top border-light' style={{textAlign: 'left'}}>
        <h1 className='fs-3 mb-4 fw-light'>Educator Name</h1>
        <p className='px-0'>Educator Specialization</p>
        <button className='btn btn-animated bg-primary btn-white border text-uppercase px-3 py-2'>
          View Profile
        </button>
      </div>
    </div>
  )
}

export default EducatorCard;
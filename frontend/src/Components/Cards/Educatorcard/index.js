import './style.css'


const EducatorCard = () => {
  let id = Math.ceil(Math.random() * 100 + Math.random() * 100)

  return (
    <div className='p-0 w-100 h-100'>
      <div className='educatorCard card p-0 w-100 h-100 border'>
        <img src="..." alt="..." className="card-img bg-transparent" />
        <div className='educator-info card-img-overlay py-5 px-3 align-self-top border-light' style={{textAlign: 'left'}}>
          <h1 className='fs-3 mb-4 fw-light'>Educator Name</h1>
          <p className='px-0'>Educator Specialization</p>
          <button 
            className='btn btn-animated bg-primary btn-white border text-uppercase px-3 py-2' 
            data-bs-toggle="modal"
            data-bs-target={`#educatorModal${id}`}>
            View Profile
          </button>
        </div>
      </div>

      <div className="modal fade" id={`educatorModal${id}`} tabIndex="-1" aria-labelledby={`educatorModalLabel${id}`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h1 className='fs-1 mb-4 fw-light'>Educator Name</h1>
                <p className='fs-5'>Educator Specialization</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur. 
                  Eaque vero ex beatae, adipisci nulla ullam quibusdam fugiat 
                  accusantium incidunt voluptatem consequuntur,
                  animi temporibus rerum magnam amet deleniti rem architecto molestias odio error
                  quo aliquid nemo fuga? Nemo enim magni minus sit 
                  tempore nihil nesciunt, suscipit alias explicabo illum ex natus.
                </p>
                <div className="d-flex flex-row justify-content-center gap-3 my-3">
                  <a href="/#">
                    <i className="bi bi-facebook fs-3 btn-animated text-secondary"></i>
                  </a>
                  <a href="/#">
                    <i className="bi bi-linkedin fs-3 btn-animated text-secondary"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default EducatorCard;
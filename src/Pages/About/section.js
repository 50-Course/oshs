import Icon1 from '../../Assets/Imgs/icon-1.png'
import Icon2 from '../../Assets/Imgs/icon-2.png'
import Icon3 from '../../Assets/Imgs/icon-3.png'
import Icon4 from '../../Assets/Imgs/icon-4.png'


export const HeaderSection = () => {
  return (
    <div
      className='mx-auto' 
      style={{
        width: '80%'
      }}
    >
      <div className='mb-5'>
        <h2 className="mb-5 text-center">
          WE HAVE FAITH IN OUR STUDENT FUTURE
        </h2>
        <p>
          Oshodi Senior High School (OSHS) is a multi-campus university established 
          in the year 1984 and owned by the Lagos State government. 
          The main campus is located at Ojo, along the Lagos-Badagry Expressway. 
          Pan-African University is primarily a business school, offering two MBA programmes.
        </p>
      </div>

      <div className="mt-5 row-cols-1 row-cols-md-2 row justify-content-center">
        <span className="col gap-4 d-md-flex align-items-lg-center justify-content-center my-4">
          <img
            className='mb-auto'
            src={Icon1}
            style={{
              width: '70px',
              height: '70px'
            }}
            alt="Dilligence"
          />
          <span>
            <h3>Empower</h3>
            <p className='mt-3'>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. 
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </span>
        </span>
        <span className="col gap-4 d-md-flex align-items-lg-center justify-content-center my-4">
          <img
            className='mb-auto'
            src={Icon2}
            style={{
              width: '70px',
              height: '70px'
            }}
            alt="integrity"
          />
          <span>
            <h3>Engage</h3>
            <p className='mt-3'>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. 
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            </p>
          </span>
        </span>
        <span className="col gap-4 d-md-flex align-items-lg-center justify-content-center my-4">
          <img
            className='mb-auto'
            src={Icon3}
            style={{
              width: '70px',
              height: '70px'
            }}
            alt="Fear Of God"
          />
          <span>
            <h3>Graduation</h3>
            <p className='mt-3'>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. 
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            </p>
          </span>
        </span>
        <span className="col gap-4 d-md-flex align-items-lg-center justify-content-center my-4">
          <img
            className='mb-auto'
            src={Icon4}
            alt="passion"
            style={{
              width: '70px',
              height: '70px'
            }}
          />
          <span>
            <h3>Awarding</h3>
            <p className='mt-3'>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. 
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            </p>
          </span>
        </span>
      </div>

    </div>
  )
}


export const AnthemSection = () => {
  return (
    <div className='my-5 mx-auto p-5'>
      <div className="accordion accordion-flush" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button fw-bold fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              State Anthem
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed fw-bold fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              School Anthem
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed fw-bold fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              School Pledge
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


import './style.css'
import Header from "./header"
import { HeaderSection, AnthemSection } from './section';
import Footer from '../../Layouts/Footer';

const About = () => {
  return <div>
    <Header />
    <main className="d-flex w-100 justify-content-center mb-5">
      <div
        className="text-center row row-cols-1 row-cols-md-2 row-cols-lg-3 bg-white shadow-lg border-rounded" 
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          top: '58vh',
          width: '90%',
          padding: 0
        }}
      >
        <div className="d-flex row-cols-1 row-cols-lg-4 flex-lg-row flex-column w-100 align-items-center px-5 px-lg-5 py-4 gap-4">
          <div className="mb-2 col">
            <span>
              <h1 className='display-4 fw-bold'>1945</h1>
              <p className="fs-5 fw-light">YEAR FOUNDED</p>
            </span>
          </div>
          <div className="mb-2 col">
            <span>
              <h1 className='display-4 fw-bold'>32</h1>
              <p className="fs-5 fw-light">CERTIFIED TEACHERS</p>
            </span>
          </div>
          <div className="mb-2 col">
            <span>
              <h1 className='display-4 fw-bold'>6,409</h1>
              <p className="fs-5 fw-light">GRADUATED STUDENTS</p>
            </span>
          </div>
          <div className='mb-2 col'>
            <span>
              <h1 className='display-4 fw-bold'>289</h1>
              <p className="fs-5 fw-light">AWARD WINNERS</p>
            </span>
          </div>
        </div>
      </div>

      <div
        id='main'
        style={{
          width: '90%'
        }}
      >
        <HeaderSection />
        <AnthemSection />
      </div>
    </main>
    <Footer />

  </div>
}


export default About;

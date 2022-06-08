import './style.css'
import Header from "./header";
import EducatorCard from '../../Components/Cards/Educatorcard';
import LoadMoreButton from '../../Components/Buttons/LoadMore';
import Footer from '../../Layouts/Footer';


const EducatorPage = () => {
  return (
    <div>
      <Header />
      <main className='w-100'>
        <div className="w-100 shadow bg-transparent">
          <EducatorSearch />
        </div>
        <div className='container mx-auto justify-content-center row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-5 p-5'>
          <div className='col my-2' style={{height: '40vh'}} >
            <EducatorCard />
          </div>
          <div className='col my-2' style={{height: '40vh'}} >
            <EducatorCard />
          </div>
          <div className='col my-2' style={{height: '40vh'}} >
            <EducatorCard />
          </div>
          <div className='col my-2' style={{height: '40vh'}} >
            <EducatorCard />
          </div>
          <div className='w-100 mt-5'>
            <LoadMoreButton />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )  
}

const EducatorSearch = () => {
  return (
    <div className="educatorSearch">
      <div className="input-group bg-transparent">
        <span className="input-group-text bg-transparent border-0" >
          <i className="bi bi-search"></i>
        </span>
        <input type="search" className="form-control p-3 border-0 bg-transparent" id="educatorSearch" placeholder="Find an Educator by name or subject" />
      </div>
    </div>
  )
}

export default EducatorPage;
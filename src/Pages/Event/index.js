import './style.css'
import Header from "./header"
import LoadMoreButton from "../../Components/Buttons/LoadMore";
import EventCard from '../../Components/Cards/EventCard';
import Footer from '../../Layouts/Footer';

const Event = () => {
  return <div>
    <Header />
    <main className="d-flex w-100 justify-content-center mb-5">
      <EventSearch />
      <div
        id='main'
        style={{
          width: '90%'
        }}
        className='mx-auto justify-content-center row row-cols-1 row-cols-md-2 row-cols-lg-4'
      >
        <div className='col my-2'>
          <EventCard />
        </div>
        <div className='col my-2'>
          <EventCard />
        </div>
        <div className='col my-2'>
          <EventCard />
        </div>
        <div className='col my-2'>
          <EventCard />
        </div>
        <div className='w-100 mt-5'>
          <LoadMoreButton />
        </div>
      </div>
    </main>
    <Footer />

  </div>
}

const EventSearch = () => {
  return (
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
      <form className="d-flex row-cols-1 row-cols-lg-4 flex-lg-row flex-column w-100 align-items-center px-5 px-lg-5 py-4 gap-4">
        <div className="mb-2 col">
          <label htmlFor="keywordInput" className="form-label">Keyword</label>
          <input type="text" className="form-control py-3" id="keywordInput" placeholder="Type Keyword here" />
        </div>
        <div className="mb-2 col">
          <label htmlFor="tagInput" className="form-label">Event Tags</label>
          <select className="form-select py-3" id="tagInput" aria-label="All Tags">
            <option selected>All Tags</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-2 col">
          <label htmlFor="categoryInput" className="form-label">Event Categories</label>
          <select className="form-select py-3" id="categoryInput" aria-label="All Categories">
            <option selected>All Categories</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mt-lg-5 col">
          <button className="btn btn-primary btn-lg fs-4 w-75 btn-animated">Search Event</button>
        </div>
      </form>
    </div>
  ) 

}

export default Event;

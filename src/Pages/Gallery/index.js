import Header from "./header"
import GalleryCard from "../../Components/Cards/GalleryCard";
import LoadMoreButton from "../../Components/Buttons/LoadMore";
import './style.css'

const Gallery = () => {

  return (
    <div>
      <Header />
      <main className="d-flex w-100 justify-content-center">
        <div
          className="text-center row row-cols-1 row-cols-md-2 row-cols-lg-3 bg-transparent" 
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            top: '75vh',
            width: '90vw',
            minHeight: '25vh',
            padding: 0
          }}
        >
          <div className="col px-0" style={{height: '50vh'}}>
            <GalleryCard />
          </div>
          <div className="col px-0" style={{height: '50vh'}}>
            <GalleryCard />
          </div><div className="col px-0" style={{height: '50vh'}}>
            <GalleryCard />
          </div>
          <div className="col px-0" style={{height: '50vh'}}>
            <GalleryCard />
          </div>
          <div className="col px-0" style={{height: '50vh'}}>
            <GalleryCard />
          </div><div className="col px-0" style={{height: '50vh'}}>
            <GalleryCard />
          </div>
          
          <div className="my-5 w-100">
            <LoadMoreButton />
          </div>
        </div>
      </main>
    </div>
  )
}


export default Gallery;
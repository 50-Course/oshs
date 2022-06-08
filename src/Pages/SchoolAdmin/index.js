import Header from "./header";
import EducatorCard from '../../Components/Cards/Educatorcard';
import Footer from "../../Layouts/Footer";

const SchoolAdminPage = () => {
  return (
    <div>
      <Header />
      <main className='w-100 mt-5'>
        <h2 className="text-center my-5">Principal  </h2>
        <div className='w-50 mx-auto' style={{height: '40vh'}}>
          <EducatorCard />
        </div>

        <div className='container mx-auto my-5'>
          <h2 className="text-center">Vice Principals</h2>
          <div className="justify-content-center row row-cols-1 row-cols-md-3 p-5">
            <div className='col my-2' style={{height: '40vh'}} >
              <EducatorCard />
            </div>
            <div className='col my-2' style={{height: '40vh'}} >
              <EducatorCard />
            </div>
            <div className='col my-2' style={{height: '40vh'}} >
              <EducatorCard />
            </div>
          </div>
        </div>

      </main>
      <Footer />

    </div>
  )
}

export default SchoolAdminPage;
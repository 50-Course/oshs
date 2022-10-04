import NewsCard from "../../Components/Cards/NewsCard";
import GalleryCard from "../../Components/Cards/GalleryCard";
import { FullScreenModal } from "../../Layouts/Modal";


export const PrincipalAddressSection = () => {
  return (
    <section className="bg-light p-5">
      <div className="row container mx-auto">
        <div className="col-md-7 order-md-0 order-1 col-12">
          <h1 className="mb-4">Principal's Address</h1>
          <h2 className="fs-4 text-muted mb-4">Subheading</h2>
          <p>
            Cillum excepteur mollit incididunt nulla. Sunt irure enim dolor non in esse in ipsum. 
            Reprehenderit velit occaecat est velit eu fugiat laborum pariatur. 
            Pariatur sint duis pariatur cillum tempor do amet. 
            Cillum ipsum sint enim deserunt voluptate cillum cillum ad consequat dolore.
            Incididunt sint incididunt ut do culpa laborum nisi cillum esse cupidatat. 
            Laboris ea est reprehenderit laborum ex aliqua deserunt velit excepteur. 
            Et consequat ex officia cupidatat dolor. 
          </p>
          <p className="text-dark fw-bold mb-0">Adrian Logan</p>
          <p>Director</p>
        </div>
        <div className="col-md-5 order-0 order-md-1 col-12 d-flex">
          <img className="rounded-circle border border-transparent bg-dark my-auto mx-auto" style={{width: '15rem', height: '15rem'}} alt="..." src=""/>
        </div>
      </div>
    </section>
  );
}

export const AboutSection = () => {
  return (
    <section className="p-5">
      <div className="container text-center">
        <h1 className="mb-4">About OSHS</h1>
        <p>
          Commodo Lorem anim qui commodo ex elit Lorem enim eiusmod sit. 
          Est ad sit reprehenderit nostrud dolor ut mollit. 
          Ex et et laborum tempor excepteur aliqua ad ad nisi cupidatat incididunt occaecat mollit.
          Occaecat sunt veniam est sint ex minim. 
          Non sint tempor pariatur do. 
          Culpa aliquip laboris quis excepteur nostrud veniam aliquip id occaecat proident sint.
          Enim deserunt laboris ea enim minim occaecat ullamco nostrud sint eiusmod quis. 
          Labore deserunt et sunt proident nisi ea. 
          Velit irure anim aliquip non. 
          Aliquip nisi esse aliquip sunt adipisicing officia labore ex qui consequat ut. 
          Labore culpa adipisicing esse officia id ad sit.
        </p>
      </div>
    </section>
  )
}

export const AchievmentSection = () => {
  return (
    <section className="pt-5 pb-5" id="achievement-section">
      <div className="container text-center text-light">
        <h1 className="mb-4">OUR TEACHERS AND STUDENTS ACHIEVEMENTS</h1>
        <div className="d-flex flex-md-row flex-column gap-3 justify-content-center ">
          <span>
            <h2>1945</h2>
            <p className="text-light">YEAR FOUNDED</p>
          </span>
          <span>
            <h2>32</h2>
            <p className="text-light">CERTIFIED TEACHERS</p>
          </span>
          <span>
            <h2>6,409</h2>
            <p className="text-light">GRADUATED STUDENTS</p>
          </span>
          <span>
            <h2>289</h2>
            <p className="text-light">AWARDS WINNER</p>
          </span>
        </div>
      </div>
    </section>
  )
}

export const MissionSection = () => {
  return (
    <section className="bg-white">
      <div className="container p-5 text-center">
        <h1 className="mb-4">Our Mission & Vission </h1>
        <p>
          Irure amet ad irure esse qui sint laborum cupidatat ad qui deserunt consectetur adipisicing. 
          Id ut irure incididunt elit ut duis sint. Ut in elit elit magna.
          Minim est laborum ex elit minim laboris officia velit 
          proident eu consectetur labore ipsum exercitation. 
          Qui ullamco laborum et nostrud pariatur occaecat in culpa mollit. 
          Culpa irure consequat est consequat Lorem incididunt cupidatat reprehenderit. 
        </p>
        <p>
          Cupidatat do enim non officia. 
          Esse proident occaecat duis consequat voluptate magna sint amet aute duis. 
          Elit voluptate cupidatat irure ut laboris anim ullamco nostrud excepteur. 
          Fugiat ex velit Lorem id esse quis.
          Mollit est ad laborum veniam amet deserunt sunt. Eiusmod reprehenderit 
          aliqua velit exercitation excepteur duis laborum voluptate aliquip. 
          Duis id minim culpa eu amet officia nisi enim. 
        </p>
        <h4 className="text-muted my-5">Core Values</h4>
        <div className="row-cols-2 row-cols-md-4 row justify-content-center">
          <span className="col">
            <img 
              src="https://img.icons8.com/external-flat-wichaiwi/64/000000/external-diligent-small-business-flat-wichaiwi.png"
              alt="Dilligence"
            />
            <p>Dilligence</p>
          </span>
          <span className="col">
            <img 
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-integrity-press-and-media-flaticons-flat-flat-icons.png"
              alt="integrity"
            />
            <p>Integrity</p>
          </span>
          <span className="col">
            <img 
              src="https://img.icons8.com/cute-clipart/64/000000/pray.png"
              alt="Fear Of God"
            />
            <p>Fear Of God</p>
          </span>
          <span className="col">
            <img 
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-passion-relationship-flaticons-flat-flat-icons-2.png"
              alt="passion"
            />
            <p>Passion for Excellence</p>
          </span>
        </div>
      </div>
    </section>
  )
}

export const NewsSection = () => {
  return (
    <section>
      <div className="container bg-white p-5 my-5">
        <h1 className="text-center mb-5">Latest News And Events</h1>
        <div className="row row-cols-1 gap-3 gap-lg-0 row-cols-lg-3 justify-content-center">
          <div className="col">
            <NewsCard />
          </div>
          <div className="col">
            <NewsCard />
          </div>
          <div className="col">
            <NewsCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export const GallerySection = () => {
  const indexs = [0,1,2,3]

  return (
    <section className="bg-light">
      <div className="container-fluid p-5 mt-5">
        <h1 className="text-center mb-5">Gallery</h1>
        <div className="d-flex flex-lg-row flex-column gap-4">

          <div className="flex-fill" style={{height: '30rem'}}>
            <GalleryCard index="galleryFullScreenMain" />
            <FullScreenModal id="galleryFullScreenMain" Content={<GalleryCard />} />
          </div>

          <div className="flex-fill" >
            <div className="row d-flex flex-row row-cols-1 row-cols-lg-2">
            {
              indexs.map((i)  => {
                return <div className="col px-0" key={i} style={{height: '15rem'}}>
                  <GalleryCard index={"galleryFullScreen" + i} />
                  <FullScreenModal id={"galleryFullScreen" + i} Content={<GalleryCard />} />
                </div>
              })
            }

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

import './style.css'

const GalleryCard = ({index, ...props}) => {
  return (
    <div className='w-100 h-100'>
      <div className="card galleryCard p-0 w-100 h-100" data-bs-toggle={(index) ? 'modal': '' } data-bs-target={'#' + index}>
        <img src="..." alt="..." className="w-100 h-100 bg-light" />
      </div>
    </div>
  )
}

export default GalleryCard
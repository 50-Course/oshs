import './style.css'


const LoadMoreButton = () => {
  return (
    <span className="w-100 load-more-btn">
      <span className="text-center w-100">
        Load more
        <i className="mx-2 bi bi-chevron-down" aria-hidden="true"></i>
      </span>
    </span>
  )
}

export default LoadMoreButton;

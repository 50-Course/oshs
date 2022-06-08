

export const FullScreenModal = ({Content, id, ...props}) => {
  return (
    <div className="modal fade" tabIndex="-1" aria-labelledby={id + "Label"} aria-hidden="true" id={id}>
      <div className="modal-dialog modal-fullscreen">
        {Content}
      </div>
    </div>
  ) 
}


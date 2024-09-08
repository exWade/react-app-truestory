import { ICard } from '../../types/models'
import './Modal.scss'
import '../styles/resolutions.scss'

interface ModalProps {
  card: ICard | undefined
  onClose: () => void
}

export function Modal({ card, onClose }: ModalProps) {
  return (
    <>
      <div className="modal" id="modalWindow" onClick={onClose}>
        <div className="modal-whiteboard" onClick={(e) => { e.stopPropagation() }}><span className="close" onClick={onClose}>×</span>
          <div className="whiteboard-container">
            <div className="modal-left-side" style={{ backgroundImage: `url(${card?.image})` }}>

              <div className="modalImage-container">

                <img src={card?.image} alt="" className="modal-content-image"></img>
              </div>

            </div>
            <div className="modal-right-side">
              <h2 className="image-title" id="modal-title">{card?.title}</h2>
              <p className="modalImage-caption" id="modal-caption">{card?.description}</p>
              <p className="modalImage-caption mt-6 italic" id="modal-caption">{card?.city}, {card?.year}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

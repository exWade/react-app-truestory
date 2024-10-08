import { ICard } from "../../types/models";
import "./Modal.scss";

interface ModalProps {
  card: ICard | undefined;
  onClose: () => void;
}

export function Modal({ card, onClose }: ModalProps) {
  const today = new Date();
  return (
    <>
    
      <div className="modal" id="modalWindow" onClick={onClose}>
        <div
          className="modal-whiteboard"
           role="document"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span className="close" onClick={onClose}>
            ×
          </span>
          <div className="whiteboard-container">
            <div
              className="modal-left-side"
              style={{ backgroundImage: `url(${card?.thumbnailUrl})` }}
            >
              <div className="modalImage-container">
                <img
                  src={card?.url}
                  alt={card?.title}
                  className="modal-content-image"
                  onError={(event) => {
                    const target = event.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x600?text=${card?.title}`;
                  }}
                ></img>
              </div>
            </div>
            <div className="modal-right-side">
              <h2 className="image-title" id="modal-title">
                {card?.title}
              </h2>
              <p className="modalImage-caption" id="modal-caption">
                {card?.description || card?.title}
              </p>
              <p className="modalImage-caption mt-6 italic" id="modal-caption">
                {card?.place || "Unkown place"},{" "}
                {card?.year || today.getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

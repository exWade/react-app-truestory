import "./Card.scss";
import { ICard, IPhoto } from "../../types/models";

interface CardProps {
  card: ICard | IPhoto;

  onModal: CallableFunction;
}

export function Card({ card, onModal }: CardProps) {
  const handleModalOpening = (cardState: ICard) => {
    onModal(cardState);
  };

  const today = new Date();

  return (
    <div className="photo-card-content">
      <div
        tabIndex={0}
        className="card-img-container"
        onClick={() => {
          handleModalOpening(card);
        }}
      >
        <img
          className="card-image"
          id="card-img"
          src={`${card.thumbnailUrl ? card.thumbnailUrl : card.url}`}
          alt={card.title}
          onError={(event) => {
            const target = event.target as HTMLImageElement;
            target.src = `https://placehold.co/280x280?text=${card.title}`;
          }}
        />
      </div>
      <div className="image-caption" aria-label="Image caption">
        {card.title}
      </div>
      <div className="description hidden" aria-label="Card description">
        {card.description || card.title}
      </div>
      <div className="addition">
        <div
          className="addition-wrapper"
          aria-label="Place where photo was taken and that date"
        >
          {card.place || "Unkown place"}, {card.year || today.getFullYear()}
        </div>
      </div>
    </div>
  );
}

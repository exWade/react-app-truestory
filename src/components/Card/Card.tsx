import "./Card.scss";
import { ICard } from "../../types/models";

interface CardProps {
  card: ICard;

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
        className="card-img-container"
        onClick={() => {
          handleModalOpening(card);
        }}
      >
        <img
          className="card-image"
          id="card-img"
          src={`${card.url}`}
          // style={{ backgroundImage: `url(${card.url})` }}
          alt={card.title}
          onError={(event) => {
            const target = event.target as HTMLImageElement;
            target.src = `https://placehold.co/400x400?text=${card.title}`}}
        />
      </div>
      <div className="image-caption">{card.title}</div>
      <div className="description hidden">{card.description || card.title}</div>
      <div className="addition">
        <div className="addition-wrapper">
          {card.place || "Unkown place"}, {card.year || today.getFullYear()}
        </div>
      </div>
    </div>
  );
}

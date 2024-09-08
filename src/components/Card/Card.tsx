import './Card.scss'
 import { ICard } from '../../types/models'


interface CardProps {
  card: ICard
  openModal: CallableFunction
  onModal: CallableFunction
}

export function Card({ card, openModal, onModal }: CardProps) {

  const handleModalOpening = (cardState: ICard) => {
    onModal(cardState);
    openModal();
  }

  return (
    <div className="photo-card-content" draggable={false}>
      <div className="card-img-container" onClick={() => { handleModalOpening(card) }}>
        <img className="card-image" id="card-img" src={`${card.image}`} style={{ backgroundImage: `url(${card.image})` }}
          draggable="false" alt="" />
      </div>
      <div className="image-caption">
        {card.title}
      </div>
      <div className="description hidden">
        {card.description}
      </div>
      <div className="addition">
        <div className="addition-wrapper">{card.city}, {card.year}</div>
      </div>
    </div>

  )
}


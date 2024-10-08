// Gallery.tsx
import "../../index.scss";
import "./Gallery.scss";
import { Card } from "../Card/Card";
import { cards as initialCards } from "../../data/cards";
import { ICard } from "../../types/models";
import { useContext, useEffect, useMemo, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Modal } from "../Modal/Modal";
import CreateCardModal from "../CreateCard/CreateCardModal";
import CreateCard from "../CreateCard/CreateCard";
import { TFunction } from "i18next";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

interface GalleryProps {
  searched: string;
  counting: CallableFunction;
  t: TFunction;
}

export function Gallery({ searched, counting, t }: GalleryProps) {
  const { modal, open, close, modalCreate, closeCreate } = useContext(ModalContext);
  const [modalState, setModalState] = useState<ICard | null>(null);
  const [photocards, setPhotocards] = useState<ICard[]>([...initialCards]);

  // Фильтрация карточек на основе поискового запроса
  const getSearchedCards = () => {
    if (searched) {
      return photocards.filter((card) =>
        card.title.trim().toLowerCase().includes(searched.trim().toLowerCase())
      );
    }
    return photocards;
  };

  // Используем useMemo для оптимизации фильтрации
  const searchedCards = useMemo(getSearchedCards, [searched, photocards]);

  // Обработчик окончания перетаскивания
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // Если нет пункта назначения или позиция не изменилась
    if (!destination || destination.index === source.index) {
      return;
    }

    // Находим перемещаемую карточку
    const movedCard = searchedCards[source.index];

    // Создаём копию основного массива без перемещаемой карточки
    const updatedPhotocards = photocards.filter((card) => card.id !== movedCard.id);

    // Вставляем перемещаемую карточку в новую позицию
    const newIndex = destination.index;
    updatedPhotocards.splice(newIndex, 0, movedCard);

    // Обновляем состояние
    setPhotocards(updatedPhotocards);
  };

  useEffect(() => {
    // Функция для подсчёта карточек
    const handleCountQuery = (count: number) => {
      counting(count);
    };

    // Обработчик нажатия клавиши Escape для закрытия модальных окон
    // const handleEscape = (e: KeyboardEvent) => {
    //   if (e.key === "Escape") {
    //     close();
    //     closeCreate();
    //   }
    // };

    // document.addEventListener("keydown", handleEscape);

    // Подсчитываем количество отображаемых карточек
    handleCountQuery(searchedCards.length);

    return () => {
      // document.removeEventListener("keydown", handleEscape);
    };
  }, [searchedCards.length, close, closeCreate, counting]);

  // Обработчик создания новой карточки
  const createHandler = (card: ICard) => {
    setPhotocards((prev) => [card, ...prev]);
    closeCreate();
  };

  // Обработчик открытия модального окна
  const handleModalOpening = (cardState: ICard) => {
    setModalState(cardState);
    open();
  };

  return (
    <main className="mx-auto">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="gallery" direction="horizontal">
          {(provided) => (
            <div
              className="workspace transition-all justify-items-center grid 2xl:grid-cols-4 2xl:gap-14 xl:grid-cols-4 xl:gap-4 lg:grid-cols-3 lg:gap-12 md:grid-cols-2 md:gap-36 sm:grid-cols-1 sm:gap-4"
              id="wrkspc"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {searchedCards.map((card, index) => (
                <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className={`photo-card ${snapshot.isDragging ? "dragging" : ""}`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card card={card} onModal={handleModalOpening} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Модальные окна */}
      {modal && <Modal card={modalState} onClose={close} />}
      {modalCreate && (
        <CreateCardModal>
          <CreateCard t={t} onCreate={createHandler} />
        </CreateCardModal>
      )}
    </main>
  );
}

export default Gallery;

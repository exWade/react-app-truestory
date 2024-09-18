import "../../index.scss";
import "./Gallery.scss";
import { Card } from "../Card/Card";
import { cards } from "../../data/cards";
import { ICard } from "../../types/models";
import { Loader } from "../Loader/Loader";
import { useContext, useEffect, useMemo, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Modal } from "../Modal/Modal";
import CreateCardModal from "../CreateCard/CreateCardModal";
import CreateCard from "../CreateCard/CreateCard";
import { TFunction } from "i18next";

interface GalleryProps {
  searched: string;
  counting: CallableFunction;
  t: TFunction;
}

export function Gallery({ searched, counting, t }: GalleryProps) {
  const { modal, open, close } = useContext(ModalContext);
  const [modalState, setModalState] = useState<ICard>();
  const { modalCreate, closeCreate } = useContext(ModalContext);
  const [photocards, setPhotocards] = useState([...cards]);

  useEffect(() => {
    // ПОДСЧЁТ КАРТОЧЕК
    const handleCountQuery = (e: number) => {
      counting(e);
    };

    handleCountQuery(searchedCards.length);
  }, [getSearchedCards]);

  const createHandler = (card: ICard) => {
    setPhotocards((prev) => [card, ...prev]);
    closeCreate();
  };

  const handleModalOpening = (modalState: ICard) => {
    setModalState(modalState);
    open();
    console.log("handleModalOpening", modalState);
  };

  function getSearchedCards() {
    if (searched) {
      return photocards.filter((card) =>
        card.title.trim().toLowerCase().includes(searched.trim().toLowerCase())
      );
    }

    return photocards;
  }

  // РАЗОБРАТЬСЯ С useMemo
  const searchedCards = useMemo(getSearchedCards, [searched, photocards]);

  return (
    <div className="">
      <section
        className="workspace mx-auto justify-items-center grid xl:grid-cols-4 xl:gap-8 lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-4"
        id="wrkspc"
      >
        {searchedCards.map((card) => (
          <div
            className="photo-card mb-4 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0"
            key={card.id}
          >
            <Card
              card={card}
              key={card.description}
              onModal={handleModalOpening}
            />
          </div>
        ))}
      </section>

      {modal && <Modal card={modalState} onClose={close} />}

      {modalCreate && (
        <CreateCardModal>
          <CreateCard t={t} onCreate={createHandler} />
        </CreateCardModal>
      )}

      {/* <Messages />  */}
      <Loader />
    </div>
  );
}

export default Gallery;

import "../../index.scss";
import "./Gallery.scss"
import { Card } from "../Card/Card";
import { cards } from "../../data/cards";
import { ICard } from "../../types/models";
import { Loader } from "../Loader/Loader";
import { useMemo, useState } from "react";

interface GalleryProps {
  searched: string;
}

export function Gallery ({ searched }: GalleryProps) {

  
  const [photocards, setPhotocards] = useState([...cards]);


  const handleModalOpening = (modalState: ICard) => {
    setModalState(modalState);
  };

  function getSearchedCards() {
    if (searched) {
      return photocards.filter((card) =>
        card.title.trim().toLowerCase().includes(searched.trim().toLowerCase())
      );
    }
    
    return photocards;
  }

  const searchedCards = useMemo(getSearchedCards, [searched, photocards]);

  return (
    <>
      <section className="workspace" id="wrkspc">
        {searchedCards.map((card) => (
          <div
            className="photo-card"
            key={card.id}
            draggable={true}
            // onDragStart={(e: any) => dragStartHandler(e, card)}
            // onDragLeave={(e: any) => dragLeaveHandler(e)}
            // onDragEnd={(e: any) => dragEndHandler(e)}
            // onDragOver={(e: any) => dragOverHandler(e)}
            // onDrop={(e: any) => dropHandler(e, card)}
          >
            <Card
              card={card}
              key={card.description}
              onModal={handleModalOpening}
              openModal={open}
            />
          </div>
        ))}
      </section>
      
      {/* <div
        className="progress fixed bottom-[85px] right-6"
        id="progBar"
        style={{ background: "conic-gradient(rgb(153, 67, 67)" }}
      >
        <button
          className="toTop-Btn rounded-full text-white text-2xl px-4 select-none"
          onClick={toTop}
        >
          &uarr;
        </button>
      </div> */}

      {/* <button
        className=" add-Btn fixed bottom-4 right-6 rounded-full text-white text-2xl select-none"
        onClick={openCreate}
      >
        +
      </button> */}

      {/* {modal && <Modal card={modalState} onClose={close} />}
      {modalCreate && (
        <CreateCardModal>
          <CreateCard onCreate={createHandler} />
        </CreateCardModal>
      )}
      
      <Messages /> */}
      <Loader />
    </>
  );
}

export default Gallery;

import axios from "axios";
import React, { useContext, useEffect, useState, useRef, useMemo } from "react";
import "../components/Gallery/Gallery.scss";
import { Card } from "../components/Card/Card";
import { ICard } from "../types/models";
import { ModalContext } from "../context/ModalContext";
import { Modal } from "../components/Modal/Modal";
import Hub from "../components/Hub/Hub";
import { Loader } from "../components/Loader/Loader";
import { TFunction } from "i18next";

interface BrowsePageProps {
  searched: string;
  t: TFunction;
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const BrowsePage: React.FC<BrowsePageProps> = ({ searched, t }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const { modal, open, close } = useContext(ModalContext);
  const [modalState, setModalState] = useState<ICard>();

  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  const observerTarget = useRef<HTMLDivElement | null>(null); // Ref для элемента наблюдения

  // Запрос данных и обновление состояния
  useEffect(() => {
    if (fetching && !searched) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_limit=12&_page=${currentPage}`
        )
        .then((response) => {
          setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
          const total = response.headers["x-total-count"];
          if (total) {
            setTotalCount(Number(total));
          }
        })
        .finally(() => setFetching(false));
    }
  }, [fetching, searched]);

  // Используем IntersectionObserver для реализации пагинации
  useEffect(() => {

    if (searched) return; // Отключаем наблюдение, если идёт поиск

    const options = {
      root: null, // Наблюдаем за областью видимости окна
      rootMargin: "0px",
      threshold: 1.0, // Полностью видимый элемент
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && photos.length < totalCount) {
        setFetching(true); // Когда элемент попадает в область видимости, загружаем новые данные
      }
    }, options);

    if (observerTarget.current) {
      observer.observe(observerTarget.current); // Наблюдаем за элементом "триггером"
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current); // Прекращаем наблюдение при размонтировании
      }
    };
  }, [photos, totalCount, searched]);

  // Открытие модального окна
  const handleModalOpening = (modalState: ICard) => {
    setModalState(modalState);
    open();
  };

  function getSearchedPhotos() {
    if (searched) {
      return photos.filter((photo) =>
        photo.title.trim().toLowerCase().includes(searched.trim().toLowerCase())
      );
    }

    return photos;
  }

  // РАЗОБРАТЬСЯ С useMemo
  const searchedPhotos = useMemo(getSearchedPhotos, [searched, photos]);

  return (
    <main className="container mx-auto worldwide">
      <div
        className="workspace transition-all justify-items-center grid 2xl:grid-cols-4 2xl:gap-14 xl:grid-cols-4 xl:gap-4 lg:grid-cols-3 lg:gap-12 md:grid-cols-2 md:gap-36 sm:grid-cols-1 sm:gap-4"
        id="wrkspc"
      >
        {searchedPhotos.map((photo, index) => (
          <div className="photo-card" key={`${photo.id}-${index}`}>
            <Card card={photo} key={photo.id} onModal={handleModalOpening} />
          </div>
        ))}
      </div>

      {/* Триггер для IntersectionObserver */}
      {!searched && (
        <div
          ref={observerTarget}
          style={{ height: "auto", backgroundColor: "transparent" }}
        >
          <Loader />
        </div>
      )}

      {modal && <Modal card={modalState} onClose={close} />}
      <Hub />
    </main>
  );
};

export default BrowsePage;

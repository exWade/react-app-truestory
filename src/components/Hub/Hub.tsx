import { useContext, useEffect } from "react";
import "./Hub.scss";
import { ModalContext } from "../../context/ModalContext";


const Hub = () => {

  const { openCreate } = useContext(ModalContext);


  console.log("render");
  useEffect(() => {
    const progressBar = document.getElementById("progBar");
    console.log("useEffect render");
    
    function toTopHide() {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        progressBar!.style.transform = "translateX(0px)";
        progressBar!.style.opacity = "1";
      } else {
        progressBar!.style.transform = "translateX(1500px)";

        progressBar!.style.opacity = "0";
      }
    }

    function progressStatus() {
      const windowScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight; // минусуя уже отображенную пользователю часть страницы
      const progressPercents = (windowScroll / windowHeight) * 360;
      if (progressBar) {
        progressBar!.style.background = `conic-gradient(rgb(141, 141, 141) ${progressPercents}deg,  var(--anchor-color) 0deg`;
      }
    }

    // Вызываем функции при первой загрузке страницы
    toTopHide();
    progressStatus();

    // Добавляем обработчики событий
    window.addEventListener("scroll", toTopHide);
    window.addEventListener("scroll", progressStatus);

    // Удаляем обработчики при размонтировании компонента для избежания утечек памяти
    return () => {
      window.removeEventListener("scroll", toTopHide);
      window.removeEventListener("scroll", progressStatus);
    };
  }, []);

  return (
    <>
      {console.log("return")}
      <div
        className="progress fixed bottom-[80px] right-4"
        id="progBar"
        style={{ background: "conic-gradient(rgb(153, 67, 67)" }}
      >
        <button
          className="toTop-Btn rounded-[25%] text-white text-2xl select-none"
          onClick={() => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }}
        >
          &uarr;
        </button>
      </div>

      <button
        className=" add-Btn fixed bottom-4 right-4 rounded-full text-white text-2xl select-none"
        onClick={openCreate}
      >
        +
      </button>
    </>
  );
};

export default Hub;

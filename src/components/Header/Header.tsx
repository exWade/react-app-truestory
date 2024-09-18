import React, { useEffect } from "react";
import "../../index.scss";
import "./Header.scss";
import { profile } from "../../data/profile";
import { i18n, TFunction } from "i18next";

interface HeaderProps {
  searching: (query: string) => void;
  i18n: i18n;
  t: TFunction;
}

const Header: React.FC<HeaderProps> = ({ searching, i18n, t }) => {
  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    searching(e.target.value);
  };

  useEffect(() => {
    const switchLang = document.querySelector(".switch-lang");

    const initializeLanguage = (language: string) => {
      for (let i = 0; i < i18n.languages.length; i++) {
        switchLang?.classList.remove(i18n.languages[i]);
      }

      switchLang?.classList.add(language);
      // console.log("Initialize Lang");
    };

    // const changeLanguage = (language: string) => {
    //   if (language !== i18n.language) {
    //     switchLang?.classList.add(language);
    //     i18n.changeLanguage(language);
    //     console.log(i18n.languages);
    //   }
    //   else {
    //     console.log("change lang equals");
    //   }
    // };

    initializeLanguage(i18n.resolvedLanguage || "en");
    console.log(i18n.resolvedLanguage, "resolvedLang");
    return () => {};
  }, []);

  const changeLang = (language: string) => {
    if (language !== i18n.language) {
      switchLang?.classList.remove(i18n.language);
      switchLang?.classList.add(language);
      i18n.changeLanguage(language);
    }
  };

  return (
    <header>
      <div className="header-container container">
        <div className="header-logo-container px-2">
          <a className="header-logo" href="." id="truestory-logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2965/2965705.png"
              className="header-logo__camera"
            ></img>{" "}
            <span className="hidden xl:inline lg:inline md:inline sm:hidden">Truestory</span>{" "}
          </a>
          <div className="switch-lang" id="switchLang">
            <div className="langs__layout">
              <ul className="langs">
                <li
                  className="langs__item"
                  data-lang="en"
                  onClick={() => changeLang("en")}
                >
                  <div className="flag en"></div> English
                </li>
                <li
                  className="langs__item"
                  data-lang="tk"
                  onClick={() => changeLang("tk")}
                >
                  <div className="flag tk"></div>Türkçe
                </li>
                <li
                  className="langs__item"
                  data-lang="rs"
                  onClick={() => changeLang("rs")}
                >
                  <div className="flag rs"></div>Српски
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-righside pr-2">
          <div className="form-search-container w-[150px] xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[150px]">
            <div className="search">
              <input
                type="text"
                id="search-content"
                onChange={handleSearchQuery}
                placeholder={t("search") ? t("search") : "Search"}
                className="header-search"
              ></input>
              <div className="magnifier"></div>
            </div>
          </div>
          <div className="switch-mode" id="switch-mode"></div>

          <div className="header-info__mini">
            <div className="avatar-mini"></div>
            <div className="nickname-mini">{profile.nickname}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "../../index.scss";
import "./Header.scss";
import { profile } from "../../data/profile";
import { changeLanguage, t } from "i18next";

interface HeaderProps {
  searching: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searching }) => {
  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    searching(e.target.value);
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-logo-container">
          <a className="header-logo" href="." id="truestory-logo">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/2965/2965705.png"
              className="header-logo__camera"
            ></img>{" "}
            <span>Truestory</span>{" "}
          </a>
          <div className="switch-lang" id="switchLang">
            <div className="langs__layout">
              <ul className="langs">
                <li
                  className="langs__item"
                  data-lang="en"
                  onClick={() => changeLanguage("en")}
                >
                  <div className="flag en"></div> English
                </li>
                <li className="langs__item" data-lang="tk">
                  <div className="flag tk"></div>Türkçe
                </li>
                <li className="langs__item" data-lang="rs">
                  <div className="flag rs"></div>Српски
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-righside">
          <div className="form-search-container">
            <div className="search">
              <input
                type="text"
                id="search-content"
                onChange={handleSearchQuery}
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

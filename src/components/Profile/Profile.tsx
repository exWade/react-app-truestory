import React from "react";
import { profile } from "../../data/profile";
import "../../index.scss";
import "./Profile.scss";
import { TFunction } from "i18next";

interface ProfileProps {
  t: TFunction;
  counted: number;
}

const Profile: React.FC<ProfileProps> = ({ t, counted }) => {
  if (window.innerWidth > 730.8) {
    document.getElementById("profile__about")?.setAttribute("open", "");
  } else {
    document.getElementById("profile__about")?.removeAttribute("open");
  }
  return (
    <section className="profile" aria-label="User's profile description">
      <div className="background__container h-[168px] 2xl:h-[288px] xl:h-[288px] lg:h-[288px] md:h-[248px] sm:h-[168px]">
        <img
          srcSet={`${profile.backgroundImage}?width=100 100w,
          ${profile.backgroundImage}?width=200 200w,
          ${profile.backgroundImage}?width=400 400w,
          ${profile.backgroundImage}?width=800 800w`}
          sizes="(max-width: 800px) 100vw, 50vw"
          alt="Background profile image picked by user"
          src={`${profile.backgroundImage}`}
          className="background__image"
        />
      </div>

      <div className="shadow" id="profile-js">
        <div className="profile__main h-[240px]">
          <div
            className="profile__avatar w-[134px] h-[134px]  xl:w-[194px] xl:h-[194px] lg:w-[194px] lg:h-[194px] md:w-[194px] md:h-[194px] sm:w-[134px] sm:h-[134px]"
            style={{ backgroundImage: `url(${profile.photo}` }}
          >
            <div className="profile__status">
              <span className="text-2xl leading-8">{profile.status}</span>
            </div>
          </div>
          <div className="profile__main-full">
            <div className="names__group">
              <div className="nickname__group">
                <h2 className="nickname">{profile.nickname}</h2>
                <div className="verified"></div>
              </div>
              <h3 className="shortgray pl-[4px] pt-[8px]">
                {profile.firstName}
              </h3>
            </div>
            <div className="social__group">
              <a href="tel:88888888888" className="social-box">
                <div className="social social__phone"></div>
              </a>
              <a href="mailto:exwadecoop@gmail.com" className="social-box">
                <div className="social social__mail" tabIndex={-1}></div>
              </a>
              <a
                href="https://github.com/exWade"
                className="social-box"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social social__site"></div>
              </a>
            </div>
          </div>
        </div>

        <details
          className="profile__about hidden xl:block lg:block md:hidden sm:hidden"
          id="profile__about"
        >
          <summary className="lng-about shortgray pb-[16px]">
            {t("about")}
          </summary>
          <ul className="about__list" id="about-list">
            <li>• {profile.about.job}</li>
            <li>• {profile.about.age} y.o.</li>
            <li>
              • Lives in {profile.about.residence.city},
              {" " + profile.about.residence.country}
            </li>
          </ul>
        </details>

        <div className="counters">
          <div className="counters__group">
            <div className="counters__group-items flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col xl:w[280px] lg:w-[280px] md:w-[200px] sm:w-[160px]">
              <div className="counter-box self-start">
                <div className="counter self-start xl:self-center lg:self-center md:self-start sm:self-start">
                  {counted}
                </div>
                <h3 className="shortgray">{t("countersCards")}</h3>
              </div>
              <div className="counter-box self-start">
                <div className="counter self-start xl:self-center lg:self-center md:self-start sm:self-start">
                  {profile.followersCount}
                </div>
                <h3 className="shortgray">{t("countersFollowers")}</h3>
              </div>
              <div className="counter-box self-start">
                <div className="counter self-start xl:self-center lg:self-center md:self-start sm:self-start">
                  {profile.followingCount}
                </div>
                <h3 className="shortgray">{t("countersFollowing")}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

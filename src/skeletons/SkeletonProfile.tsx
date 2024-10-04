import "../components/Profile/Profile.scss";

const SkeletonProfile = () => {
  return (
    <>
      <div className="background__container h-[168px] 2xl:h-[288px] xl:h-[288px] lg:h-[288px] md:h-[248px] sm:h-[168px]">
        <div className="background__image"></div>
      </div>

      <section className="profile" id="profile-js">
        <div className="profile__main h-[240px]">
          <div className="profile__avatar skeleton w-[134px] h-[134px] xl:w-[194px] xl:h-[194px] lg:w-[194px] lg:h-[194px] md:w-[194px] md:h-[194px] sm:w-[134px] sm:h-[134px]" />
          <div className="profile__main-full">
            <div className="names__group">
              <div className="nickname__group">
                <div className=" skeleton w-40 h-6"></div>
              </div>
              <div className="shortgray skeleton w-24 h-5 pl-[4px] pt-[8px]"></div>
            </div>
            <div className="social__group load">
              <div className="social-box skeleton w-8 h-8 mr-2"></div>
              <div className="social-box skeleton w-8 h-8 mr-2"></div>
              <div className="social-box skeleton w-8 h-8"></div>
            </div>
          </div>
        </div>

        <details
          className="profile__about hidden xl:block lg:block md:hidden sm:hidden"
          id="profile__about"
          open
        >
          <summary className="lng-about shortgray skeleton pb-[16px] w-1/3 mb-4"></summary>
          <ul className="about__list" id="about-list">
            <li className="skeleton w-1/2 h-4 mb-4"></li>
            <li className="skeleton w-1/4 h-4 mb-4"></li>
            <li className="skeleton w-3/4 h-4"></li>
          </ul>
        </details>

        <div className="counters">
          <div className="counters__group">
            <div className="counters__group-items flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col xl:w[280px] lg:w-[280px] md:w-[200px] sm:w-[160px]">
              <div className="counter-box self-start">
                <div className="counter skeleton w-16 h-6 mb-1"></div>
                <div className="shortgray skeleton w-20 h-4"></div>
              </div>
              <div className="counter-box self-start">
                <div className="counter skeleton w-16 h-6 mb-1"></div>
                <div className="shortgray skeleton w-20 h-4"></div>
              </div>
              <div className="counter-box self-start">
                <div className="counter skeleton w-16 h-6 mb-1"></div>
                <div className="shortgray skeleton w-20 h-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkeletonProfile;

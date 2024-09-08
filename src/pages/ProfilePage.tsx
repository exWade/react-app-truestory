import React from "react";
import Profile from "../components/Profile/Profile";
import Gallery from "../components/Gallery/Gallery";
import { Loader } from "../components/Loader/Loader";
import Hub from "../components/Hub/Hub";
import { TFunction } from "i18next";

interface ProfilePageProps {
  searched: string;
  t: TFunction;
}


const ProfilePage: React.FC<ProfilePageProps> = ({ searched, t }) => {

  return (
    <>
      <Profile t={t} />
      <Gallery searched={searched} />
      <Hub/>

      

    
    </>
  );
};

export default ProfilePage;

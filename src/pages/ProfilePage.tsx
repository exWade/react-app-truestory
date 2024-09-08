import React from "react";
import Profile from "../components/Profile/Profile";
import Gallery from "../components/Gallery/Gallery";
import { Loader } from "../components/Loader/Loader";
import Hub from "../components/Hub/Hub";

interface ProfilePageProps {
  searched: string;
}

// Крч разобраться с searched, скорее всего нужно создавать контекст (кастом хук)

const ProfilePage: React.FC<ProfilePageProps> = ({ searched }) => {

  return (
    <>
      <Profile />
      <Gallery searched={searched} />
      <Hub/>

      

    
    </>
  );
};

export default ProfilePage;

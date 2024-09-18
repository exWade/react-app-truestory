import React, { useState } from "react";
import Profile from "../components/Profile/Profile";
import Gallery from "../components/Gallery/Gallery";
// import { Loader } from "../components/Loader/Loader";
import Hub from "../components/Hub/Hub";
import { TFunction } from "i18next";

interface ProfilePageProps {
  searched: string;
  t: TFunction;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ searched, t }) => {
  const [counted, setCount] = useState<number>(0);

  const handleCountQuery = (counted: number) => {
    setCount(counted);
  };

  return (
    <div className="container mx-auto">
      <Profile t={t} counted={counted} />
      <Gallery t={t} searched={searched} counting={handleCountQuery} />
      <Hub />
    </div>
  );
};

export default ProfilePage;

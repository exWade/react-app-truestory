import Header from "./components/Header/Header.tsx";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import { Loader } from "./components/Loader/Loader.tsx";
import SkeletonProfilePage from "./skeletons/SkeletonProfilePage.tsx";

const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const BrowsePage = lazy(() => import("./pages/BrowsePage"));

function App() {
  const { t, i18n } = useTranslation();
  const [searched, setSearched] = useState<string>("");

  const handleSearchQuery = (searched: string) => {
    setSearched(searched);
  };

  return (
    <div className="min-h-screen pt-24">
      <Header searching={handleSearchQuery} i18n={i18n} t={t} />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<SkeletonProfilePage />}>
              <ProfilePage searched={searched} t={t} />
            </Suspense>
          }
        />
        <Route
          path="browse"
          element={
            <Suspense fallback={<Loader />}>
              <BrowsePage searched={searched} t={t} />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

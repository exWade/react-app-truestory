// import "./resolutions.scss";
import Header from "./components/Header/Header.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const [searched, setSearched] = useState<string>("");

  const handleSearchQuery = (searched: string) => {
    setSearched(searched);
  };

  return (
    <div className="min-h-screen pt-24">
      <Header searching={handleSearchQuery} i18n={i18n} t={t} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage searched={searched} t={t} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

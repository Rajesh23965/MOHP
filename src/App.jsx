import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import LatestNews from "./components/LatestNews.jsx";
import ScrollableLatestNews from "./components/ScrollableLatestNews.jsx";
import NayaInformation from "./components/QuickInformation/NayaInformation.jsx";
import SmartHealthInitiatives from "./components/SmartHealthInitiatives.jsx";
import HealthVideoLink from "./components/HealthVideoLink.jsx";
import ImportantHealthDays from "./components/QuickInformation/ImportantHealthDays.jsx";
import AboutUsPage from "./components/AboutUsPage.jsx";
import Layout from "./components/Layout.jsx";
import APINewsNotice from "./components/APINewsNotice.jsx";
import ProgramAPI from "./components/ProgramAPI.jsx";
import APIHealthInstruction from "./components/APIHealthInstruction.jsx";
import APIResources from "./components/APIResources.jsx";
import APIViewMore from "./components/APIResources.jsx";

function App() {
  const [isNepali, setIsNepali] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleLanguage = () => setIsNepali((prevLanguage) => !prevLanguage);
  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#050505" : "#fff";
    document.body.style.color = isDarkMode ? "#faf7f7" : "#000";
  }, [isDarkMode]);

  const aboutUsPaths = [
    { path: "/about-us", endpoint: "posts/1" },
    { path: "/minister", endpoint: "posts/2" },
    { path: "/state-minister", endpoint: "posts/3" },
    // Add the remaining paths here
  ];

  const newsnotice = [
    { path: "/press", api: "albums/1" },
    { path: "/transfer", api: "albums/2" },
    { path: "/promotion", api: "albums/3" },
    { path: "/scholarship", api: "albums/4" },
  ];

  const program = [
    { path: "/family", api: "photos/1" },
    { path: "/safeMotherhood", api: "photos/2" },
    { path: "/femaleCommunity", api: "photos/3" },
    { path: "/adolescent", api: "photos/4" },
    { path: "/primaryHealth", api: "photos/5" },
    { path: "/safeAbortion", api: "photos/6" },
  ];

  const healthapi = [
    { path: "/reg", api: "movies/1" },
    { path: "/zonalHospitals", api: "movies/2" },
    { path: "/teachingHospitals", api: "movies/3" },
    { path: "/diseaseSpecific", api: "movies/4" },
    { path: "/centralHospitals", api: "movies/5" },
    { path: "/districtHospitals", api: "movies/6" },
    { path: "/bedded", api: "movies/7" },
  ];

  const topbar = [{ api: "getall/669347b4ca6c3d00dbd4d31f" }];
  const resources = [
    { path: "/forms", api: "todos/1" },
    { path: "/plans", api: "todos/2" },
    { path: "/reports", api: "todos/3" },
    { path: "/directives", api: "todos/4" },
    { path: "/hight", api: "todos/5" },
    { path: "/nepal", api: "todos/6" },
    { path: "/right", api: "todos/7" },
  ];

  const viewmore1 = [{ path: "/viewmore", viewmore: "users" }];

  return (
    <Router>
      <Layout
        isNepali={isNepali}
        isDarkMode={isDarkMode}
        toggleLanguage={toggleLanguage}
        toggleDarkMode={toggleDarkMode}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LatestNews
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                  toggleLanguage={toggleLanguage}
                  toggleDarkMode={toggleDarkMode}
                />
                <ScrollableLatestNews
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                  toggleLanguage={toggleLanguage}
                  toggleDarkMode={toggleDarkMode}
                />
                <NayaInformation
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                  toggleLanguage={toggleLanguage}
                  toggleDarkMode={toggleDarkMode}
                />
                <SmartHealthInitiatives
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                  toggleLanguage={toggleLanguage}
                  toggleDarkMode={toggleDarkMode}
                />
                <HealthVideoLink
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                  toggleLanguage={toggleLanguage}
                  toggleDarkMode={toggleDarkMode}
                />
                <ImportantHealthDays
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                  toggleLanguage={toggleLanguage}
                  toggleDarkMode={toggleDarkMode}
                />
              </>
            }
          />
          {aboutUsPaths.map(({ path, endpoint }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <AboutUsPage
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                  endpoint={endpoint}
                />
              }
            />
          ))}
          {newsnotice.map(({ path, api }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <APINewsNotice
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                  api={api}
                />
              }
            />
          ))}
          {program.map(({ path, api }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <ProgramAPI
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                  api={api}
                />
              }
            />
          ))}
          {healthapi.map(({ path, api }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <APIHealthInstruction
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                  api={api}
                />
              }
            />
          ))}
          {resources.map(({ path, api }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <APIResources
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                  api={api}
                />
              }
            />
          ))}
          {viewmore1.map(({ path, api }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <APIViewMore
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                  api={api}
                />
              }
            />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

import Navbar from "./Header/Navbar.jsx";
import IconLink from "./Header/IconLink.jsx";
import LogoPage from "./Logo.jsx";
import Header from "./Header.jsx";
import Footar from "./Footar/footar.jsx";

const Layout = ({
  children,
  isNepali,
  isDarkMode,
  toggleLanguage,
  toggleDarkMode,
}) => {
  return (
    <div className="text-center w-full">
      <Navbar
        isNepali={isNepali}
        toggleLanguage={toggleLanguage}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <IconLink
        isNepali={isNepali}
        toggleLanguage={toggleLanguage}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <LogoPage
        isNepali={isNepali}
        toggleLanguage={toggleLanguage}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Header
        isNepali={isNepali}
        toggleLanguage={toggleLanguage}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      {children}
      <Footar
        isNepali={isNepali}
        toggleLanguage={toggleLanguage}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
};

export default Layout;

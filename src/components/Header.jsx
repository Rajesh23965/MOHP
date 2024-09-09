import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import AboutUs from "./Menu/AboutUs";
import NewsNotice from "./Menu/NewsNotice";
import Programs from "./Menu/Programs";
import HealthInstruction from "./Menu/HealthInstruction";
import Resources from "./Menu/Resources";
import { IoIosArrowDown } from "react-icons/io";

const translations = {
  en: {
    home: "Home",
    aboutUs: "About Us",
    newsNotice: "News/Notice",
    programs: "Programs",
    healthInstructions: "Health Instructions",
    resources: "Resources",
    contactFeedback: "Contact/Feedback",
  },
  np: {
    home: "गृहपृष्ठ",
    aboutUs: "हाम्रो बारेमा",
    newsNotice: "समाचार/सूचना",
    programs: "कार्यक्रमहरू",
    healthInstructions: "स्वास्थ्य निर्देशन",
    resources: "स्रोतहरू",
    contactFeedback: "सम्पर्क/प्रतिक्रिया",
  },
};

const Header = ({ isNepali, isDarkMode }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [click, setClick] = useState(false);

  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setActiveMenu(null);
      setClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => setClick(!click);

  const toggleMenu = (menuName) => {
    setActiveMenu(menuName === activeMenu ? null : menuName);
  };

  const lang = isNepali ? translations.np : translations.en;

  return (
    <header
      className={`sticky top-0 z-50 mt-3 ${
        isDarkMode
          ? "bg-yellow text-[#020202]"
          : "bg-blue text-white font-semibold"
      }`}
    >
      <nav
        className="content-center lg:px-12 flex lg:h-14 flex-wrap"
        ref={navRef}
      >
        <button className="lg:hidden m-3 ml-4" onClick={handleClick}>
          <FaBars />
        </button>
        <ul
          className={`lg:flex justify-around ${
            click ? "block" : "hidden"
          } w-full z-50 transition duration-300 ease-in-out transform lg:items-center space-y-3 lg:space-y-0 text-start lg:text-center lg:-ml-5`}
        >
          <li className="flex items-center justify-start ml-5 lg:ml-0 cursor-pointer">
            <Link to="/">{lang.home}</Link>
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveMenu("aboutUs")}
            onMouseLeave={() => setActiveMenu(null)}
            onClick={() => toggleMenu("aboutUs")}
          >
            <div className="flex items-center justify-start ml-5 lg:ml-0">
              {lang.aboutUs} <IoIosArrowDown className="ml-1 h-3.5 w-3.5" />
            </div>
            {activeMenu === "aboutUs" && (
              <div className="absolute mt-2 p-2 lg:w-72 w-full text-[#020202] lg:text-start z-50 bg-white">
                <AboutUs isNepali={isNepali} isDarkMode={isDarkMode} />
              </div>
            )}
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveMenu("newsNotice")}
            onMouseLeave={() => setActiveMenu(null)}
            onClick={() => toggleMenu("newsNotice")}
          >
            <div className="flex items-center justify-start ml-5 lg:ml-0">
              {lang.newsNotice} <IoIosArrowDown className="ml-1 h-3.5 w-3.5" />
            </div>
            {activeMenu === "newsNotice" && (
              <div className="absolute mt-2 border-2 lg:w-40 w-full bg-white text-start p-2 text-[#020202] lg:text-start z-50">
                <NewsNotice isNepali={isNepali} isDarkMode={isDarkMode} />
              </div>
            )}
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveMenu("programs")}
            onMouseLeave={() => setActiveMenu(null)}
            onClick={() => toggleMenu("programs")}
          >
            <div className="flex items-center justify-start ml-5 lg:ml-0">
              {lang.programs} <IoIosArrowDown className="ml-1 h-3.5 w-3.5" />
            </div>
            {activeMenu === "programs" && (
              <div className="absolute mt-2 border-2 border-gray bg-white text-[#020202] text-start lg:w-80 w-full z-50">
                <Programs isNepali={isNepali} isDarkMode={isDarkMode} />
              </div>
            )}
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveMenu("healthInstructions")}
            onMouseLeave={() => setActiveMenu(null)}
            onClick={() => toggleMenu("healthInstructions")}
          >
            <div className="flex items-center justify-start ml-5 lg:ml-0">
              {lang.healthInstructions}{" "}
              <IoIosArrowDown className="ml-1 h-3.5 w-3.5" />
            </div>
            {activeMenu === "healthInstructions" && (
              <div className="absolute mt-2 border-2 border-gray bg-white text-[#020202] lg:40 w-full text-start z-50">
                <HealthInstruction
                  isNepali={isNepali}
                  isDarkMode={isDarkMode}
                />
              </div>
            )}
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveMenu("resources")}
            onMouseLeave={() => setActiveMenu(null)}
            onClick={() => toggleMenu("resources")}
          >
            <div className="flex items-center justify-start ml-5 lg:ml-0">
              {lang.resources} <IoIosArrowDown className="ml-1 h-3.5 w-3.5" />
            </div>
            {activeMenu === "resources" && (
              <div className="absolute mt-2 space-y-3 border-2 bg-white text-[#020202] lg:40 w-full text-start z-50">
                <Resources isNepali={isNepali} isDarkMode={isDarkMode} />
              </div>
            )}
          </li>
          <li className="mt-2 cursor-pointer justify-start ml-5 lg:ml-0">
            समायोजना मिलानको पत्र
          </li>
          <li className="mt-2 cursor-pointer justify-start ml-5 lg:ml-0">
            {lang.contactFeedback}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

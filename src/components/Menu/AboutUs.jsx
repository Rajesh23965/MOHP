import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";
import MoHpDivision from "../SubMenu/MoHpDivision";
import DepartHealthService from "../SubMenu/DepartHealthService";

const translations = {
  en: {
    mohp: "About MoHP",
    division: "MoHP Divisions",
    depthealth: "Department of Health Services",
    aboutus: "About US",
    minister: "Hon'ble Minister",
    stateMinister: "Hon'ble State Minister",
    emergency: "Health Emergency and Disaster Management Unit",
    financial: "Financial Administration Section",
  },
  np: {
    mohp: "मन्त्रालय को बारेमा",
    division: "मन्त्रालय महाशाखा",
    depthealth: "स्वास्थ्य सेवा विभाग",
    aboutus: "हाम्रो बारेमा",
    minister: "माननीय मन्त्री",
    stateMinister: "माननीय राज्य मन्त्री",
    emergency: "स्वास्थ्य आपतकालिन र विपद् व्यवस्थापन इकाई",
    financial: "आर्थिक प्रशासन शाखा",
  },
};

function AboutUs({ isNepali, isDarkMode }) {
  const [showMenu, setShowMenu] = useState(null);

  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setShowMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const lang = isNepali ? translations.np : translations.en;

  return (
    <div ref={navRef} className="-mt-3 relative z-50">
      <ul>
        {/* About MoHP Menu */}
        <li
          onMouseEnter={() => setShowMenu("mohp")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.mohp}</span> <LuChevronRight className="" />
          </div>
          {showMenu === "mohp" && (
            <div className="relative lg:-top-10 lg:left-full ">
              <ul className="space-y-3 absolute z-50 border-2 bg-white text-[#020202] text-start lg:w-48 w-[355px]">
                <li className="px-2 bg-white hover:bg-gray">
                  <Link to="/about-us">{lang.aboutus}</Link>
                </li>
                <li className="px-2 bg-white hover:bg-gray">
                  <Link to="/minister">{lang.minister}</Link>
                </li>
                <li className="px-2 bg-white hover:bg-gray">
                  <Link to="/state-minister">{lang.stateMinister}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* MoHP Divisions Menu */}
        <li
          onMouseEnter={() => setShowMenu("division")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.division}</span> <LuChevronRight />
          </div>
          {showMenu === "division" && (
            <div className="relative lg:-top-10  lg:left-full ">
              <ul className="border-3 space-y-3 absolute z-50 border-2 bg-white text-[#020202] text-start lg:w-48 w-[355px]">
                <li>
                  <MoHpDivision isNepali={isNepali} isDarkMode={isDarkMode} />
                </li>
                <li className="bg-white hover:bg-gray p-2">
                  <Link to="/emergency">{lang.emergency}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* Department of Health Services Menu */}
        <li
          onMouseEnter={() => setShowMenu("depthealth")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.depthealth}</span> <LuChevronRight />
          </div>
          {showMenu === "depthealth" && (
            <div className="relative lg:-top-10  lg:left-full ">
              <ul className="space-y-3 absolute z-50 border-2 bg-white text-[#020202] text-start lg:w-48 w-[355px]">
                <li>
                  <DepartHealthService
                    isNepali={isNepali}
                    isDarkMode={isDarkMode}
                  />
                </li>
                <li className="bg-white hover:bg-gray p-2">
                  <Link to="/financial">{lang.financial}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default AboutUs;

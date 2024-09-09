import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const translations = {
  en: {
    national: "National actioon plan for anti microbial resistance",
    reports: "Reports",
  },
  np: {
    national: "Action Plan",
    reports: "प्रतिवेदन",
  },
};

function MicrobialResistance({ isNepali, isDarkMode }) {
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
    <div ref={navRef} className="">
      <ul>
        <li
          onMouseEnter={() => setShowMenu("KnowledgeCafe")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray  ">
            <span>Microbial Resistance (AMR)</span>
          </div>
          {showMenu && (
            <div className="relative lg:-top-10  lg:left-full    ">
              <ul className="lg:-top-10 space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start lg:w-72 w-80  ">
                <li className=" bg-white hover:bg-gray p-2">
                  <Link to="/national">{lang.national}</Link>
                </li>
                <li className=" bg-white hover:bg-gray p-2">
                  <Link to="/reports">{lang.reports}</Link>
                </li>
                <li className=" bg-white hover:bg-gray p-2">
                  <Link to="/antimicrobial">
                    National Antimicrobial Treatment Guideline 2023
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default MicrobialResistance;

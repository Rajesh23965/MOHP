import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const translations = {
  en: {
    KnowledgeCafe: "Knowledge Cafe",
    KnowledgeSecretariat: "Knowledge cafe secretariat",
    KnowledgeBank: "  Knowledge bank",
    KnowledgeProducts: "  Knowledge products",
    Reports: "Reports and Publications",
    Other: " Other activities",
  },
  np: {
    KnowledgeCafe: "ज्ञान क्याफे",
    KnowledgeSecretariat: "ज्ञान क्याफे सचिवालय",
    KnowledgeBank: "ज्ञान बैंक",
    KnowledgeProducts: "ज्ञान उत्पादनहरू",
    Reports: "रिपोर्ट र प्रकाशनहरू",
    Other: "अन्य गतिविधिहरू",
  },
};

function KnowledgeCafe({ isNepali, isDarkMode }) {
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
    <div ref={navRef} className="-mt-3 relative z-50  ">
      <ul>
        <li
          onMouseEnter={() => setShowMenu("KnowledgeCafe")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className=" flex items-center justify-between bg-white hover:bg-gray p-2 ">
            <span className="z-50">{lang.KnowledgeCafe}</span>
          </div>
          {showMenu === "KnowledgeCafe" && (
            <div className="relative lg:-top-10 lg:left-full z-50  ">
              <ul className="lg:-top-10 space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start lg:w-72 w-80 px-3  ">
                <li className="hover:bg-gray">
                  <Link to="/KnowledgeSecretariat">
                    {lang.KnowledgeSecretariat}
                  </Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/KnowledgeBank}">{lang.KnowledgeBank}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/KnowledgeProducts}">{lang.KnowledgeProducts}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/Reports}">{lang.Reports}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/Other}">{lang.Other}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default KnowledgeCafe;

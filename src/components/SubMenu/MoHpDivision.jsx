import { useState, useRef, useEffect } from "react";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";
const translations = {
  en: {
    policies: "Policy, Planning and Monitoring Division",
    ppsection: "Policy and Planning Section",
    monitoringSection: "Monitoring and Evaluation Section",
    medicalSection: "Medical Services, Education and Research Section",
    ayurved: "Ayurved and Alternative Medical Section",
    quality: "Quality Standard and Regulation Division",
    qualityRegulation: "Quality Standard and Regulation Section",
    informationTech: "Information Technology Section",
    population: "Population Management Division",
    populationManagement: "Population Management and Information Section",
    genderEquality: "Gender Equality and Social inclusion section",
    healthCoordination: "Health Coordination Division",
    provincial: "Provincial and Local health Coordination Section",
    multilateral: "Multilateral Coordination Section",
    developmentSupport: "Development Support Coordination Section",
    publicInformation: "Public Information Coordination Section",
    administration: "Administration Division",
    employeeAdministration: "Employee Administration Section",
    financial: "Financial Administration Section",
    law: "Law Section",
    InternalAdministration: "Internal Administration Section",
  },
  np: {
    policies: "नीति, योजना तथा अनुगमन महाशाखा",
    ppsection: "नीति तथा योजना खण्ड",
    monitoringSection: "अनुगमन र मूल्याङ्कन खण्ड",
    medicalSection: "चिकित्सा सेवा, शिक्षा र अनुसन्धान शाखा",
    ayurved: "आयुर्वेद र वैकल्पिक चिकित्सा खण्ड",
    quality: "गुणस्तर मानक र नियमन विभाग",
    qualityRegulation: "गुणस्तर मानक र नियमन खण्ड",
    informationTech: "सूचना प्रविधि शाखा",
    population: "जनसंख्या व्यवस्थापन महाशाखा",
    populationManagement: "जनसंख्या व्यवस्थापन र सूचना शाखा",
    genderEquality: "लैङ्गिक समानता र सामाजिक समावेश खण्ड",
    healthCoordination: "स्वास्थ्य समन्वय महाशाखा",
    provincial: "प्रदेश र स्थानीय स्वास्थ्य समन्वय शाखा",
    multilateral: "बहुपक्षीय समन्वय खण्ड",
    developmentSupport: "विकास सहायता समन्वय शाखा",
    publicInformation: "सार्वजनिक सूचना समन्वय शाखा",
    administration: "प्रशासन शाखा",
    employeeAdministration: "कर्मचारी प्रशासन खण्ड",
    financial: "वित्तीय प्रशासन खण्ड",
    law: "कानून खण्ड",
    InternalAdministration: "आन्तरिक प्रशासन खण्ड",
  },
};

function MoHpDivision({ isNepali, isDarkMode }) {
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
    <div ref={navRef} className="relative">
      <ul>
        <li
          onMouseEnter={() => setShowMenu("policies")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2 z-50">
            <span>{lang.policies}</span> <LuChevronRight />
          </div>
          {showMenu === "policies" && (
            <div className="relative lg:left-full lg:-top-10 z-50">
              <ul className=" space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start lg:w-60 w-full">
                <li className="hover:bg-gray p-2">
                  <Link to="/ppsection">{lang.ppsection}</Link>
                </li>
                <li className="hover:bg-gray p-2">
                  <Link to="/monitoringSection">{lang.monitoringSection}</Link>
                </li>
                <li className="hover:bg-gray p-2">
                  <Link to="/medicalSection">{lang.medicalSection}</Link>
                </li>
                <li className="hover:bg-gray p-2">
                  <Link to="/ayurved">{lang.ayurved}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("quality")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.quality}</span> <LuChevronRight />
          </div>
          {showMenu === "quality" && (
            <div className="relative lg:left-full lg:-top-10 z-50">
              <ul className=" space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start lg:w-60 w-full">
                <li className="hover:bg-gray p-2">
                  <Link to="/qualityRegulation">{lang.qualityRegulation}</Link>{" "}
                </li>
                <li className="hover:bg-gray p-2">
                  <Link to="/informationTech">{lang.informationTech}</Link>{" "}
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("policies")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.population}</span> <LuChevronRight />
          </div>
          {showMenu === "population" && (
            <div className="relative lg:left-full lg:-top-10 z-50">
              <ul className=" space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start lg:w-60 w-full">
                <li className="hover:bg-gray p-2">
                  <Link to="/populationManagement">
                    {lang.populationManagement}
                  </Link>
                </li>
                <li className="hover:bg-gray p-2">
                  <Link to="/genderEquality">{lang.genderEquality}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("healthCoordination")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.healthCoordination}</span> <LuChevronRight />
          </div>
          {showMenu === "healthCoordination" && (
            <div className="relative lg:left-full lg:-top-10 z-50">
              <ul className=" space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start lgw-60 w-full">
                <li className="hover:bg-gray p-2">
                  <Link to="/provincial">{lang.provincial}</Link>
                </li>
                <li className="hover:bg-gray p-2">
                  <Link to="/multilateral">{lang.multilateral}</Link>
                </li>
                <li className="hover:bg-gray p-2">
                  <Link to="/developmentSupport">
                    {lang.developmentSupport}
                  </Link>
                </li>
                <li className="hover:bg-gray p-2">
                  <Link to="/publicInformation">{lang.publicInformation}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("administration")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.administration}</span> <LuChevronRight />
          </div>
          {showMenu && (
            <div className="relative lg:left-full lg:-top-10 z-50">
              <ul className=" space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start lg:w-44 w-full">
                <li className="hover:bg-gray p-2">
                  <Link to="/employeeAdministration">
                    {" "}
                    {lang.employeeAdministration}
                  </Link>
                </li>
                <li className="hover:bg-gray p-2">
                  <Link to="/financial">{lang.financial}</Link>
                </li>
                <li className="hover:bg-gray p-2">
                  <Link to="/law"> {lang.law}</Link>
                </li>
                <li className="hover:bg-gray p-2">
                  <Link to="/InternalAdministration">
                    {lang.InternalAdministration}
                  </Link>{" "}
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default MoHpDivision;

import { useState, useRef, useEffect } from "react";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const translations = {
  en: {
    reproductive: "Reproductive and Maternal Health",
    family: "Family Planning Programme",
    safeMotherhood: "Safe Motherhood Programme",
    femaleCommunity: "Female Community Health Programme",
    adolescent: "Adolescent and Sexual Reproductive Health Programme",
    primaryHealth: "Primary Health Care Outreach Programme",
    safeAbortion: "Safe Abortion Services (NSAS)",
    childHealth: "Child Health Services",
    communityBased:
      "Community-Based Integrated Management of National and Childhood Illnesses (CB-IMNCI)",
    nationalImmunisation: "National Immunisation Programme",
    nutrition: "Nutrition Programme",
    freeHealth: "Free Health Programme",
    package: "Package of Essential Non-communicable Diseases (PEN)",
    communicable: "Communicable Diseases",
    malariaControl: "Malaria Control Programme",
    Kalaazar: "Kala-azar Elimination Programme",
    lymphatic: "Lymphatic Filariasis Elimination",
    dengueControl: "Dengue Control Programme",
    zoonoticeDisese: "Zoonotic Disease Control Programme",
    leprosyControl: "Leprosy Control Programme",
    tuberculesis: "Tuberculosis Control Programme",
    hiv: "HIV and STI Control Programme",
    emergency: "Emergency Health Management",
    management: "Management Division",
    curativeServices: "Curative Services Division",
    medicalTreatment: "Medical Treatment of Deprived Citizens",
  },
  np: {
    reproductive: "प्रजनन र मातृ स्वास्थ्य",
    family: "परिवार योजना कार्यक्रम",
    safeMotherhood: "सुरक्षित मातृत्व कार्यक्रम",
    femaleCommunity: "महिला सामुदायिक स्वास्थ्य कार्यक्रम",
    adolescent: "किशोर र यौन प्रजनन स्वास्थ्य कार्यक्रम",
    primeHealth: "प्राथमिक स्वास्थ्य हेरचाह आउटरिच कार्यक्रम",
    safeAbortion: "सुरक्षित गर्भपतन सेवा (NSAS)",
    childHealth: "बाल स्वास्थ्य सेवा",
    communityBased:
      "सामुदायिक-आधारित राष्ट्रिय र बाल रोगको एकीकृत व्यवस्थापन (CB-IMNCI)",
    nationalImmunisation: "राष्ट्रिय खोप कार्यक्रम",
    nutrition: "पोषण कार्यक्रम",
    freeHealth: "नि:शुल्क स्वास्थ्य कार्यक्रम",
    package: "आवश्यक नसर्ने रोगहरूको प्याकेज (PEN)",
    communicable: "सरुवा रोग",
    malariaControl: "औलो नियन्त्रण कार्यक्रम",
    Kalaazar: "कालाजार उन्मूलन कार्यक्रम",
    lymphatic: "लिम्फेटिक फाइलेरियासिस उन्मूलन",
    dengueControl: "डेंगु नियन्त्रण कार्यक्रम",
    zoonoticeDisese: "Zoonotic रोग नियन्त्रण कार्यक्रम",
    leprosyControl: "कुष्ठरोग नियन्त्रण कार्यक्रम",
    tuberculesis: "क्षयरोग नियन्त्रण कार्यक्रम",
    hiv: "एचआईभी र एसटीआई नियन्त्रण कार्यक्रम",
    emergency: "आपतकालीन स्वास्थ्य व्यवस्थापन",
    management: "व्यवस्थापन विभाग",
    curativeServices: "उपचारात्मक सेवा प्रभाग",
    medicalTreatment: "वञ्चित नागरिकहरूको चिकित्सा उपचार",
  },
};

function Programs({ isNepali, isDarkMode }) {
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
    <div ref={navRef} className="-mt-3 relative z-50 ml-3">
      <ul>
        <li
          onMouseEnter={() => setShowMenu("reproductive")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.reproductive}</span> <LuChevronRight />
          </div>
          {showMenu === "reproductive" && (
            <div className="relative lg:-top-10 lg:left-full">
              <ul className="space-y-3 absolute z-50 border-2 bg-white text-[#020202] text-start lg:w-60 w-full">
                <li className="hover:bg-gray">
                  <Link to="/family">{lang.family}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/safeMotherhood">{lang.safeMotherhood}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/femaleCommunity">{lang.femaleCommunity}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/adolescent">{lang.adolescent}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/primaryHealth">{lang.primaryHealth}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/safeAbortion">{lang.safeAbortion}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("childHealth")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.childHealth}</span> <LuChevronRight />
          </div>
          {showMenu === "childHealth" && (
            <div className="relative lg:-top-10 lg:left-full">
              <ul className="space-y-3 absolute z-50 border-2 bg-white text-[#020202] text-start w-80">
                <li className="hover:bg-gray">
                  <Link to="/communityBased">{lang.communityBased}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/nationalImmunisation">
                    {lang.nationalImmunisation}
                  </Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/nutrition">{lang.nutrition}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("freeHealth")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.freeHealth}</span> <LuChevronRight />
          </div>
          {showMenu === "freeHealth" && (
            <div className="relative lg:-top-10 lg:left-full">
              <ul className="space-y-3 absolute z-50 border-2 bg-white text-[#020202] text-start w-80">
                <li className="hover:bg-gray">
                  <Link to="/package">{lang.package}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("communicable")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.communicable}</span> <LuChevronRight />
          </div>
          {showMenu === "communicable" && (
            <div className="relative lg:-top-10  lg:left-full">
              <ul className="space-y-3 absolute z-50 border-2 bg-white text-[#020202] text-start w-80">
                <li className="hover:bg-gray">
                  <Link to="/malariaControl">{lang.malariaControl}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/Kalaazar">{lang.Kalaazar}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/lymphatic">{lang.lymphatic}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/dengueControl">{lang.dengueControl}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/zoonoticeDisese">{lang.zoonoticeDisese}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/leprosyControl">{lang.leprosyControl}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/tuberculesis">{lang.tuberculesis}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/hiv">{lang.hiv}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("emergency")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.emergency}</span> <LuChevronRight />
          </div>
          {showMenu === "emergency" && (
            <div className="relative lg:-top-10  lg:left-full">
              <ul className="space-y-3 absolute z-50 border-2 bg-white text-[#020202] text-start w-80">
                <li className="hover:bg-gray">
                  <Link to="/management">{lang.management}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/curativeServices">{lang.curativeServices}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li>
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>
              <Link to="/medicalTreatment">{lang.medicalTreatment}</Link>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Programs;

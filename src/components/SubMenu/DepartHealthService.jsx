import { useState, useRef, useEffect } from "react";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const translations = {
  en: {
    managementDivision: "Management Division",
    integrated: "Integrated Health Information Management Section",
    environmental: " Environmental health and waste management Section",
    infrastructure: "Infrastructure development Section",
    logistics: "Logistics management Section",
    curative: "Curative Services Division",
    hospital: "Hospital Service Strengthening Section",
    essentialEmergency: "Essential and Emergrncy services management Section",
    eyeENT: "Eye,ENT and Oral health Section",
    family: "Family Welfare Management",
    childHealth: "Child health and immunization section",
    maternal: "Maternal and neonatal section",
    familyPlanning: "Family planning and reproductive health section",
    nurition: "Nutrition section",
    epidemiology: "Epidemiology and Disease Control divisions",
    ntd: "NTD and vector born disease control Section",
    zoonotic: "Zoonotic and other communicable disease control Section",
    disease: " Disease monitoring and investigation Section",
    epidemic: "Epidemology and Epidemic Management Section",
    ncd: "NCD and mental health Section",
    leprosy: " Leprosy control and disability Management Section",
    nursing: "Nursing and Social security Division",
    geriatic: "Geriatic and Gender based violence management Section",
    socialhealth: "Social health Section",
    nursingCapacity: "Nursing capacity development Section",
    administrationSection: "Administration Section",
    national: "National Center for AIDS and STD Control",
    controlCure: "Control, Cure, Care and Coordination Section",
    monitoring: "Monitoring, Evaluation and Research Section",
    logisticsManagement: "Logistics management and administration Section",
    nationalHealth:
      " National Health Education Information and Communication Centre",
    healthEducation: " Health Education and Material Development Section",
    healthEducationCommunication:
      "Health Education Communication Coordination Section",
    healthEducationTobacco: "Health Education and Tobacco Regulation Section",
    admin: " Admin Section",
    nationalPublic: "National Public Health Laboratory",
    ncdLab: "NCD Laboratory",
    infectious: "Infectious disease laboratory",
    laboratory: "Laboratory and blood transfusion service regulation Section",
    quality: " Quality control and training Section",
    administrationLogistic: "Administration and Logistics management Section",
    nationalTuberculosis: "National Tuberculosis Centre",
    monitoringEvaluation:
      " Monitoring, Evaluation, Surveillance and Research Section",
    tb: "TB Cure Section",
    drug: " Drug resistant TB cure Section",
    adminLogistic: "Admin and Logistics management Section",
  },
  np: {
    managementDivision: "व्यवस्थापन प्रभाग",
    integrated: "एकीकृत स्वास्थ्य सूचना व्यवस्थापन खण्ड",
    environmental: "पर्यावरण स्वास्थ्य र फोहोर व्यवस्थापन खण्ड",
    infrastructure: "पूर्वाधार विकास खण्ड",
    logistics: "लजिस्टिक व्यवस्थापन खण्ड",
    curative: "उपचारात्मक सेवा प्रभाग",
    hospital: "अस्पताल सेवा सुदृढीकरण खण्ड",
    essentialEmergency: "आवश्यक र आपतकालीन सेवा व्यवस्थापन खण्ड",
    eyeENT: "आँखा, ENT र मौखिक स्वास्थ्य शाखा",
    family: "परिवार कल्याण व्यवस्थापन",
    childHealth: "बाल स्वास्थ्य र खोप खण्ड",
    maternal: "मातृ र नवजात खण्ड",
    familyPlanning: "परिवार योजना र प्रजनन स्वास्थ्य खण्ड",
    nutrition: "पोषण खण्ड",
    epidemiology: "महामारी विज्ञान र रोग नियन्त्रण विभाग",
    ntd: "NTD र भेक्टर जन्म रोग नियन्त्रण खण्ड",
    zoonotic: "Zoonotic र अन्य सरुवा रोग नियन्त्रण खण्ड",
    disease: "रोग अनुगमन र अनुसन्धान खण्ड",
    epidemic: "इपिडेमोलोजी र महामारी व्यवस्थापन खण्ड",
    ncd: "NCD र मानसिक स्वास्थ्य खण्ड",
    leprosy: "कुष्ठरोग नियन्त्रण तथा अपाङ्गता व्यवस्थापन शाखा",
    nursing: "नर्सिङ तथा सामाजिक सुरक्षा महाशाखा",
    geriatic: "जेरियाटिक र लिङ्ग आधारित हिंसा व्यवस्थापन खण्ड",
    socialhealth: "सामाजिक स्वास्थ्य शाखा",
    nursingCapacity: "नर्सिङ क्षमता विकास खण्ड",
    administrationSection: "प्रशासन खण्ड",
    national: "एड्स र एसटीडी नियन्त्रणको लागि राष्ट्रिय केन्द्र",
    controlCure: "नियन्त्रण, उपचार, हेरचाह र समन्वय खण्ड",
    monitoring: "अनुगमन, मूल्याङ्कन र अनुसन्धान खण्ड",
    logisticsManagement: "लजिस्टिक व्यवस्थापन र प्रशासन खण्ड",
    nationalHealth: " राष्ट्रिय स्वास्थ्य शिक्षा सूचना तथा सञ्चार केन्द्र",
    healthEducation: "स्वास्थ्य शिक्षा र सामग्री विकास खण्ड",
    healthEducationCommunication: "स्वास्थ्य शिक्षा सञ्चार समन्वय शाखा",
    healthEducationTobacco: "स्वास्थ्य शिक्षा र तंबाकू नियमन खण्ड",
    admin: "व्यवस्थापक खण्ड",
    nationalPublic: "राष्ट्रिय जनस्वास्थ्य प्रयोगशाला",
    ncdLab: "NCD प्रयोगशाला",
    infectious: "संक्रामक रोग प्रयोगशाला",
    laboratory: "प्रयोगशाला र रक्तक्षेपण सेवा नियमन खण्ड",
    quality: "गुणवत्ता नियन्त्रण र प्रशिक्षण खण्ड",
    administrationLogistic: "प्रशासन र रसद व्यवस्थापन खण्ड",
    nationalTuberculosis: "राष्ट्रिय क्षयरोग केन्द्र",
    monitoringEvaluation: "अनुगमन, मूल्याङ्कन, निगरानी र अनुसन्धान खण्ड",
    tb: "क्षयरोग निको पार्ने खण्ड",
    drug: "औषधि प्रतिरोधी क्षयरोग उपचार खण्ड",
    adminLogistic: "प्रशासक र रसद व्यवस्थापन खण्ड",
  },
};

function DepartHealthService({ isNepali, isDarkMode }) {
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
          onMouseEnter={() => setShowMenu("managementDivision")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2 ">
            <span>{lang.managementDivision}</span> <LuChevronRight />
          </div>
          {showMenu === "managementDivision" && (
            <div className="relative lg:-top-10 lg:left-full  ">
              <ul className="-top-10 space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start   ">
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/integrated">{lang.integrated}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/environmental">{lang.environmental}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/infrastructure">{lang.infrastructure}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/logistics">{lang.logistics}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("curative")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <a className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span className="">{lang.curative}</span> <LuChevronRight />
          </a>
          {showMenu === "curative" && (
            <div className="relative lg:-top-10 lg:left-full ">
              <ul className=" space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start w-80  ">
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/hospital">{lang.hospital}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/essentialEmergency">
                    {lang.essentialEmergency}
                  </Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/eyeENT">{lang.eyeENT}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("family")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span className="">{lang.family}</span> <LuChevronRight />
          </div>
          {showMenu === "family" && (
            <div className="relative lg:-top-10 lg:left-full ">
              <ul className="-top-10 space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start w-80  ">
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/childHealth">{lang.childHealth}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/maternal">{lang.maternal}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/familyPlanning">{lang.familyPlanning}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/nutrition">{lang.nutrition}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("epidemiology")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span className="">{lang.epidemiology}</span> <LuChevronRight />
          </div>
          {showMenu === "epidemiology" && (
            <div className="relative lg:-top-10  lg:left-full ">
              <ul className=" space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start w-80  ">
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/ntd">{lang.ntd}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/zoonotic">{lang.zoonotic}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/disease">{lang.disease}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/epidemic">{lang.epidemic}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/ncd">{lang.ncd}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/leprosy">{lang.leprosy}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("nursing")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span className="">{lang.nursing}</span> <LuChevronRight />
          </div>
          {showMenu === "nursing" && (
            <div className="relative lg:-top-10  lg:left-full ">
              <ul className="-top-10 space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start w-80  ">
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/geriatic">{lang.geriatic}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/socialhealth">{lang.socialhealth}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/nursingCapacity">{lang.nursingCapacity}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li className="z-50 ">
          <a
            href="#"
            className="flex items-center justify-between bg-white hover:bg-gray p-2"
          >
            <span className="">
              <Link to="/administrationSection">
                {lang.administrationSection}
              </Link>
            </span>{" "}
          </a>
        </li>

        <li
          onMouseEnter={() => setShowMenu("national")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span className="">{lang.national}</span> <LuChevronRight />
          </div>
          {showMenu === "national" && (
            <div className="relative lg:-top-10 lg:left-full ">
              <ul className=" space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start w-80  ">
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/controlCure">{lang.controlCure}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/monitoring"> {lang.monitoring}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/logisticsManagement">
                    {lang.logisticsManagement}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("nationalHealth")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span className="">{lang.nationalHealth}</span> <LuChevronRight />
          </div>
          {showMenu === "nationalHealth" && (
            <div className="relative lg:-top-10 lg:left-full ">
              <ul className=" space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start w-80  ">
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/healthEducation">{lang.healthEducation}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/healthEducationCommunication">
                    {lang.healthEducationCommunication}
                  </Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/healthEducationTobacco">
                    {" "}
                    {lang.healthEducationTobacco}
                  </Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/admin">{lang.admin}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("nationalPublic")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span className="">{lang.nationalPublic}</span> <LuChevronRight />
          </div>
          {showMenu === "nationalPublic" && (
            <div className="relative lg:-top-10 lg:left-full">
              <ul className=" space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start w-80  ">
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/ncdLab">{lang.ncdLab}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/infectious">{lang.infectious}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/laboratory">{lang.laboratory}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/quality">{lang.quality}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/administrationLogistic">
                    {lang.administrationLogistic}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          onMouseEnter={() => setShowMenu("nationalTuberculosis")}
          onMouseLeave={() => setShowMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span className="">{lang.nationalTuberculosis}</span>{" "}
            <LuChevronRight />
          </div>
          {showMenu === "nationalTuberculosis" && (
            <div className="relative lg:-top-10 lg:left-full ">
              <ul className=" space-y-3 absolute z-50 border-2  bg-white text-[#020202] text-start w-80  ">
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/monitoringEvaluation">
                    {lang.monitoringEvaluation}
                  </Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/tb">{lang.tb}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/drug">{lang.drug}</Link>
                </li>
                <li className="flex items-center justify-between bg-white hover:bg-gray p-2">
                  <Link to="/adminLogistic">{lang.adminLogistic}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default DepartHealthService;

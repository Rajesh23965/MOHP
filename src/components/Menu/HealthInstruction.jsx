import { useState, useRef, useEffect } from "react";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const translations = {
  en: {
    gov: "Government",
    reg: "Regional Hospitals",
    zonalHospitals: "Zonal Hospitals",
    teachingHospitals: "Teaching Hospitals",
    diseaseSpecific: "Disease Specific Hospitals",
    centralHospitals: "Central Hospitals",
    districtHospitals: "District Hospitals",
    bedded: "15 bedded Hospitals",
    pvt: "Private",
    registered: "Registered Institutions",
    pharmacy: "Pharmacy Status",
  },
  np: {
    gov: "सरकार",
    reg: "क्षेत्रीय अस्पताल",
    zonalHospitals: "अञ्चल अस्पताल",
    teachingHospitals: "शिक्षण अस्पताल",
    diseaseSpecific: "रोग विशिष्ट अस्पताल",
    centralHospitals: "केन्द्रीय अस्पताल",
    districtHospitals: "जिल्ला अस्पताल",
    bedded: "१५ शय्याको अस्पताल",
    pvt: "निजी",
    registered: "दर्ता संस्थाहरू",
    pharmacy: "फार्मेसी स्थिति",
  },
};

function HealthInstruction({ isNepali, isDarkMode }) {
  const [openMenu, setOpenMenu] = useState(null);

  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setOpenMenu(null);
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
    <div ref={navRef} className="lg:w-60 -mt-3 relative z-50 ml-3">
      <ul className="w-full">
        <li
          className=""
          onMouseEnter={() => setOpenMenu("government")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.zonalHospitals}</span> <LuChevronRight />
          </div>
          {openMenu === "government" && (
            <div className="relative lg:-top-10  lg:left-full">
              <ul className="space-y-3 absolute z-50 border-2 px-3 bg-white text-[#020202] text-start lg:w-60 w-full">
                <li className="hover:bg-gray">
                  <Link to="/reg">{lang.reg}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/zonalHospitals">{lang.zonalHospitals}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/teachingHospitals">{lang.teachingHospitals}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/diseaseSpecific">{lang.diseaseSpecific}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/centralHospitals">{lang.centralHospitals}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/districtHospitals">{lang.districtHospitals}</Link>
                </li>
                <li className="hover:bg-gray">
                  <Link to="/bedded">{lang.bedded}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          className=""
          onMouseEnter={() => setOpenMenu("private")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>{lang.pvt}</span> <LuChevronRight />
          </div>
          {openMenu === "private" && (
            <div className="relative lg:-top-10  lg:left-full">
              <ul className="space-y-3 absolute z-50 border-2 bg-white px-3 text-[#020202] text-start lg:w-60 w-full">
                <li className="hover:bg-gray">
                  <Link to="/registered">{lang.registered}</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li className="z-50">
          <div className="flex items-center justify-between bg-white hover:bg-gray p-2">
            <span>
              <Link to="/pharmacy">{lang.pharmacy}</Link>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HealthInstruction;

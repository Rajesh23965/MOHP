import Reference from "./Secondassets/reference.png";
import OrganizationStructure from "./Secondassets/ganization-structure.png";
import DeprivedCitizen from "./Secondassets/deprived-citizen-fund.png";
import ListOfDoc from "./Secondassets/list-of-doctor.png";
import HealthStatistics from "./Secondassets/health-statistics.png";
import WiW from "./Secondassets/who-is-who.png";
import CitizenCharter from "./Secondassets/federal-section.png";
import BudgetDetails from "./Secondassets/budget-detail.png";
import { FaChevronRight } from "react-icons/fa6";
const translations = {
  en: {
    title: "Quick Information",
    fh: "MoHP terms of Reference",
    button: "More Information ",
    th: "MoHP Organization Structure",
    dc: "Deprived Citizen Fund",
    ld: "List of Doctors",
    hs: "Health Statistics",
    whw: "Who is Who",
    cc: "Citizen Charter",
    bd: "Budget Details",
  },
  np: {
    title: "द्रुत जानकारी",
    fh: "कार्य विवरण",
    button: "थप जानकारी ",
    th: "संगठनात्मक संरचना",
    dc: "विपन्न नागरिक कोष",
    ld: "डाक्टर विवरण",
    hs: "स्वास्थ्य तथ्याङ्क",
    whw: "संघियता कार्यान्वयन इकाई",
    cc: "नागरिक बडापत्र",
    bd: "बजेट विवरण",
  },
};
function NayaInformation({ isNepali, isDarkMode }) {
  const lang = isNepali ? translations.np : translations.en;
  return (
    <section className=" bg-graylight lg:ml-10 mr-4 ml-4 md:ml-10 md:mr-10   lg:mr-10 lg:px-3 md:p-6 p-6 py-5 mt-10">
      <h1 className=" underline  underline-offset-12 decoration-red py-2  border-gray text-center text-blue text-3xl font-bold">
        {lang.title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8 mb-12 font-bold">
        <div className=" rounded-3xl p-2 transition ease-in delay-150 lg:w-72 lg:h-52  bg-white hover:scale-105  duration-300 cursor-pointer py-10">
          <img
            src={Reference}
            alt="MoHP terms of Reference"
            className="mx-auto"
          />
          <h4 className="text-center mt-4 text-[14px]">{lang.fh}</h4>
          <div className="flex justify-center text-red text-[12px] ">
            <a href="" className=" text-center  ">
              {lang.button}
            </a>
            <FaChevronRight className="h-3  mt-0.5" />
          </div>
        </div>
        <div className="rounded-3xl p-2 transition ease-in delay-150 lg:w-72 lg:h-52 bg-white hover:scale-105  duration-300 cursor-pointer py-10">
          <img
            src={OrganizationStructure}
            alt="MoHP Organization Structure"
            className="mx-auto"
          />
          <h4 className="text-center mt-4 text-[14px]">{lang.th}</h4>
          <div className="flex justify-center text-red text-[12px] ">
            <a href="" className=" text-center  ">
              {lang.button}
            </a>
            <FaChevronRight className="h-3  mt-0.5" />
          </div>
        </div>
        <div className="rounded-3xl p-2 transition ease-in delay-150 lg:w-72 lg:h-52 bg-white hover:scale-105  duration-300 cursor-pointer py-10">
          <img
            src={DeprivedCitizen}
            alt="Deprived Citizen Fund"
            className="mx-auto"
          />
          <h4 className="text-center mt-4 text-[14px]">{lang.dc}</h4>
          <div className="flex justify-center text-red text-[12px] ">
            <a href="" className=" text-center  ">
              {lang.button}
            </a>
            <FaChevronRight className="h-3  mt-0.5" />
          </div>
        </div>
        <div className="rounded-3xl p-2 transition ease-in delay-150 lg:w-72 lg:h-52 bg-white hover:scale-105  duration-300 cursor-pointer py-10">
          <img src={ListOfDoc} alt="List of Doctors" className="mx-auto" />
          <h4 className="text-center mt-4 text-[14px]">{lang.ld}</h4>
          <div className="flex justify-center text-red text-[12px] ">
            <a href="" className=" text-center  ">
              {lang.button}
            </a>
            <FaChevronRight className="h-3  mt-0.5" />
          </div>
        </div>
        <div className="rounded-3xl p-2 transition ease-in delay-150 lg:w-72 lg:h-52 bg-white hover:scale-105  duration-300 cursor-pointer py-10">
          <img
            src={HealthStatistics}
            alt="Health Statistics"
            className="mx-auto"
          />
          <h4 className="text-center mt-4 text-[14px]">{lang.hs}</h4>
          <div className="flex justify-center text-red text-[12px] ">
            <a href="" className=" text-center  ">
              {lang.button}
            </a>
            <FaChevronRight className="h-3  mt-0.5" />
          </div>
        </div>
        <div className="rounded-3xl p-2 transition ease-in delay-150 lg:w-72 lg:h-52 bg-white hover:scale-105  duration-300 cursor-pointer py-10">
          <img src={WiW} alt="Who is Who" className="mx-auto" />
          <h4 className="text-center mt-4 text-[14px]">{lang.whw}</h4>
          <div className="flex justify-center text-red text-[12px] ">
            <a href="" className=" text-center  ">
              {lang.button}
            </a>
            <FaChevronRight className="h-3  mt-0.5" />
          </div>
        </div>
        <div className="rounded-3xl p-2 transition ease-in delay-150 lg:w-72 lg:h-52 bg-white hover:scale-105  duration-300 cursor-pointer py-10">
          <img src={CitizenCharter} alt="Citizen Charter" className="mx-auto" />
          <h4 className="text-center mt-4 text-[14px]">{lang.cc}</h4>
          <div className="flex justify-center text-red text-[12px] ">
            <a href="" className=" text-center  ">
              {lang.button}
            </a>
            <FaChevronRight className="h-3  mt-0.5" />
          </div>
        </div>
        <div className="rounded-3xl p-2 transition ease-in delay-150 lg:w-72 lg:h-52 bg-white hover:scale-105  duration-300 cursor-pointer py-10">
          <img src={BudgetDetails} alt="Budget Details" className="mx-auto" />
          <h4 className="text-center mt-4 text-[14px]">{lang.bd}</h4>
          <div className="flex justify-center text-red text-[12px] ">
            <a href="" className=" text-center  ">
              {lang.button}
            </a>
            <FaChevronRight className="h-3  mt-0.5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NayaInformation;

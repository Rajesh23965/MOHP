import { FaChevronRight } from "react-icons/fa6";
const translations = {
  en: {
    quick: " Quick Links",
    ab: "About Us",
    org: "Organogram",
    term: "Terms of Reference",
    budg: "Budget Details",
    ncd: "NCD",
    rom: " Nepali Unicode Romanized",
  },
  np: {
    quick: "अन्य लिङ्क",
    ab: "हाम्रो बारेमा",
    org: "संगठनात्मक संरचना",
    term: "कार्य विवरण",
    budg: "बजेट विवरण",
    ncd: "नसर्ने रोगबारे जानकारी",
    rom: "नेपाली युनिकोड रोमनाइज्ड",
  },
};
const QuickLink = ({ isNepali, isDarkMode }) => {
  const lang = isNepali ? translations.np : translations.en;
  return (
    <div className="text-[#4d4b4b] w-full lg:w-1/2">
      <h4 className="text-2xl text-start mt-10">{lang.quick}</h4>
      <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-10 font-bold flex-wrap ">
        <li className="flex gap-1">
          <FaChevronRight className="mt-1 h-2.5 " />
          <a href="" className="flex-wrap">
            {lang.ab}
          </a>
        </li>
        <li className="flex gap-1">
          <FaChevronRight className="mt-1 h-2.5" />
          <a href="">{lang.org}</a>
        </li>
        <li className="flex gap-1 lg:w-80 lg:px-16">
          <FaChevronRight className="mt-1  h-2.5" />
          <a href="" className="flex-wrap">
            {lang.term}
          </a>
        </li>
        <li className="flex gap-1 lg:w-80 lg:px-20">
          <FaChevronRight className="mt-1  h-2.5" />
          <a href="" className="flex-wrap">
            {lang.budg}
          </a>
        </li>
        <li className="flex gap-1">
          <FaChevronRight className="mt-1 h-2.5" />
          <a href="">{lang.ncd}</a>
        </li>
        <li className="flex gap-1  lg:w-60">
          <FaChevronRight className="mt-1 h-2.5 " />
          <a href="" className="flex-wrap">
            {lang.rom}
          </a>
        </li>
        <li className="flex gap-1 lg:w-60 lg:px-16">
          <FaChevronRight className="mt-1 h-2.5 " />
          <a href="">बिदा फारम</a>
        </li>
        <li className="flex gap-1 lg:w-60 lg:px-20">
          <FaChevronRight className="mt-1 h-2.5" />
          <a href="">माग फारम</a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLink;

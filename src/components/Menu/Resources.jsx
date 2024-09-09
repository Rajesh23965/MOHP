import { LuChevronRight } from "react-icons/lu";
import KnowledgeCafe from "../SubMenu/KnowledgeCafe";
import MicrobialResistance from "../SubMenu/MicrobialResistance";
import { Link } from "react-router-dom";
const translations = {
  en: {
    forms: "Forms and Formats",
    plans: "Plans, Policies, Acts & Rules",
    reports: "Reports, Surveys & Findings",
    directives: "Directives, Guidelines and Manuals",
    hight: "High Level Health Policy",
    nepal: "Nepal Demographic Health Survey",
    right: "Right to Information",
  },
  np: {
    forms: "फाराम र ढाँचाहरू",
    plans: "योजनाहरू, नीतिहरू, ऐन र नियमहरू",
    reports: "रिपोर्टहरू, सर्वेक्षणहरू र निष्कर्षहरू",
    directives: "निर्देशनहरू, दिशानिर्देशहरू र म्यानुअलहरू",
    hight: "उच्च स्तरीय स्वास्थ्य नीति",
    nepal: "नेपाल जनसांख्यिक स्वास्थ्य सर्वेक्षण",
    right: "सूचनाको अधिकार",
  },
};

function Resources({ isNepali, isDarkMode }) {
  const lang = isNepali ? translations.np : translations.en;
  return (
    <div className="lg:w-80  lg:-mt-3 relative z-50 mr-2 ml-2">
      <ul className="z-50 ">
        <li>
          <a
            href="#"
            className="flex justify-between items-center bg-white hover:bg-gray p-2"
          >
            <span>
              <Link to="/forms">{lang.forms}</Link>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex justify-between items-center bg-white hover:bg-gray p-2"
          >
            <span>
              <Link to="/plans">{lang.plans}</Link>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex justify-between items-center bg-white hover:bg-gray p-2"
          >
            <span>
              <Link to="/reports">{lang.reports}</Link>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex justify-between items-center bg-white hover:bg-gray p-2"
          >
            <span>
              <Link to="/directives">{lang.directives}</Link>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex justify-between items-center bg-white hover:bg-gray p-2"
          >
            <span>
              <Link to="/hight"> {lang.hight}</Link>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex justify-between items-center bg-white hover:bg-gray p-2"
          >
            <span>
              <Link to="/nepal">{lang.nepal}</Link>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex justify-between items-center bg-white hover:bg-gray p-2"
          >
            <span>
              <KnowledgeCafe isNepali={isNepali} isDarkMode={isDarkMode} />
            </span>
            <LuChevronRight />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex justify-between items-center bg-white hover:bg-gray p-2"
          >
            <span>
              <Link to="/right">{lang.right}</Link>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex justify-between items-center bg-white hover:bg-gray p-2"
          >
            <span>
              <MicrobialResistance
                isNepali={isNepali}
                isDarkMode={isDarkMode}
              />
            </span>
            <LuChevronRight />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Resources;

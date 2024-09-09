import { Link } from "react-router-dom";
const translations = {
  en: {
    press: "Press Release",
    transfer: "Transfer",
    promotion: "Promotion",
    scholarship: "Scholarships",
  },
  np: {
    press: "प्रेस विज्ञप्ति",
    transfer: "स्थानान्तरण",
    promotion: "प्रवर्धन",
    scholarship: "छात्रवृत्ति",
  },
};

function NewsNotice({ isNepali, isDarkMode }) {
  const lang = isNepali ? translations.np : translations.en;

  return (
    <div className="-mt-3 relative z-50 ml-3 ">
      <ul>
        <li>
          <a
            href="#"
            className={`flex items-center justify-between  hover:bg-gray p-2`}
          >
            <span>
              <Link to="/press">{lang.press}</Link>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`flex items-center justify-between hover:bg-gray p-2`}
          >
            <span>
              <Link to="/transfer">{lang.transfer}</Link>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`flex items-center justify-between hover:bg-gray p-2`}
          >
            <span>
              <Link to="/promotion">{lang.promotion}</Link>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`flex items-center justify-between hover:bg-gray p-2`}
          >
            <span>
              <Link to="/scholarship">{lang.scholarship}</Link>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NewsNotice;

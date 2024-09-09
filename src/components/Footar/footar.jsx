import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import LogoNepal from "./img/logo1.png";
import { FiLink } from "react-icons/fi";
import QuickLink from "./QuickLink.jsx";
import SocialLink from "./SocialLink.jsx";

const translations = {
  en: {
    contact: "Contact Address",
    gov: "Government of Nepal ",
    min: "Ministry of Health and  Population",
    num1: " +977-4262696",
    num2: "+977-014262543, 4262802",
    add: " Ramshahpath, Kathmandu, Nepal",
    imp: " Important Links",
    health: "Health Infrastructure Information System",
    dep: " Department of Health Services",
    hem: "Health Emergency Operation Centre",
    pubserv: "Public Service Commission",
    national: " National Planning Commission",
    hrc: "National Health Research Council",
    climate: "Climate Change and Health",
    copyright:
      " © Copyright 2022 Ministry of Health and Population , All Rights  Reserved | Designed by ",
  },
  np: {
    contact: "सम्पर्क ",
    gov: "नेपाल सरकार",
    min: "स्वास्थ्य तथा जनसंख्या मन्त्रालय",
    num1: "+९७७-४२६२६९६",
    num2: "+९७७-०१४२६२५४३, ४२६२८०२",
    add: "रामशाहपथ, काठमाडौं, नेपाल",
    imp: "महत्वपूर्ण लिङ्कहरू",
    health: "स्वास्थ्य पूर्वाधार सूचना प्रणाली",
    dep: "स्वास्थ्य सेवा विभाग",
    hem: "स्वास्थ्य आपतकालीन शल्यक्रिया केन्द्र",
    pub: "स्वास्थ्य आपतकालीन शल्यक्रिया केन्द्र",
    pubserv: "लोक सेवा आयोग",
    national: "राष्ट्रिय योजना आयोग",
    hrc: "राष्ट्रिय स्वास्थ्य अनुसन्धान परिषद",
    climate: "जलवायु परिवर्तन र स्वास्थ्य",
    copyright:
      "© सर्वाधिकार © 2022 स्वास्थ्य तथा जनसंख्या मन्त्रालय | Designed by ",
  },
};

function Footar({ isNepali, isDarkMode }) {
  const lang = isNepali ? translations.np : translations.en;
  return (
    <div className="bg-graylight mx-5 lg:ml-10  lg:mr-10 px-3  mt-10">
      <div className="relative mt-6 border-b-2 py-5 border-gray flex flex-wrap justify-around">
        <div className="mt-4 w-full lg:w-1/3 px-5">
          <h3 className="underline  underline-offset-8 decoration-red py-5  text-2xl text-left">
            {lang.contact}
          </h3>
          <div className="flex  text-start  mt-5 lg:gap-8  md:gap-8 gap-5">
            <img src={LogoNepal} alt="Image Loading" className="h-14 w-16" />
            <h4 className="font-bold ">
              {lang.gov}
              <span className="text-red flex font-bold">{lang.min}</span>
            </h4>
          </div>
          <div className="ml-12 mt-3 space-y-5">
            <div className="flex gap-2 mb-2">
              <TbDeviceLandlinePhone className="mt-1" />
              <a href="">{lang.num1}</a>
            </div>
            <div className="flex gap-2 mb-2">
              <MdOutlineEmail className="mt-1" />
              <a href="">info @ mohp.gov.np</a>
            </div>
            <div className="flex gap-2 mb-2">
              <FaPhoneAlt className="mt-1" />
              <a href="">{lang.num2}</a>
            </div>
            <div className="flex gap-2 mb-2">
              <FaLocationDot className="mt-1" />
              <span>{lang.add}</span>
            </div>
          </div>
        </div>
        <div className="Twitter max-h-screen overflow-y-auto text-start h-72 w-full lg:w-1/3 px-5 mt-4 lg:mt-0">
          <div className="flex border-1 px-5 text-center py-3 rounded-lg h-80">
            <iframe
              src="https://twitter.com/mohpnep?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Amohpnep%7Ctwcon%5Es2"
              frameBorder="0"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className="Important Links mt-4 w-full lg:w-1/3 px-5">
          <h3 className="border-b-2 py-5 border-red text-2xl">{lang.imp}</h3>
          <ul className="mt-4">
            <li className="flex gap-3 py-2">
              <FiLink className="mt-1 text-red" />
              <a href="">{lang.health}</a>
            </li>
            <li className="flex gap-3 py-2">
              <FiLink className="mt-1 text-red" />
              <a href="">{lang.dep}</a>
            </li>
            <li className="flex gap-3 py-2">
              <FiLink className="mt-1 text-red" />
              <a href="">{lang.hem}</a>
            </li>
            <li className="flex gap-3 py-2">
              <FiLink className="mt-1 text-red" />
              <a href="">{lang.pubserv}</a>
            </li>
            <li className="flex gap-3 py-2">
              <FiLink className="mt-1 text-red" />
              <a href="">{lang.national}</a>
            </li>
            <li className="flex gap-3 py-2">
              <FiLink className="mt-1 text-red" />
              <a href="">{lang.hrc}</a>
            </li>
            <li className="flex gap-3 py-2">
              <FiLink className="mt-1 text-red" />
              <a href="">{lang.climate}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:flex lg:justify-between lg:px-5 mt-6 px-2 ">
        <QuickLink isNepali={isNepali} isDarkMode={isDarkMode}></QuickLink>
        <SocialLink isNepali={isNepali} isDarkMode={isDarkMode}></SocialLink>
      </div>
      <div
        className="copyright bg-blue py-
 py-3 mt-6 text-start -ml-3 -mr-3"
      >
        <span className="text-[#e2ebe5ef] flex  ml-10   ">
          {lang.copyright}
          <a className=" hover:text-red px-2" href="https://www.ithome.com.np/">
            {" "}
            IT HOME NEPAL Pvt Ltd
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footar;

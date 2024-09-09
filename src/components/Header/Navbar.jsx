import { useState, useEffect } from "react";
import { FaEye, FaPhoneAlt } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import { VscCalendar } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import NepaliDate from "nepali-date-converter";
import axios from "axios";

const translations = {
  en: {
    lowBandwidth: "Low Bandwidth",
    normalBandwidth: "Normal Bandwidth",
    contactNumber: "+977-01-4262543, 4262802",
    email: "info@mohp.gov.np",
    date: "English Date",
    toggleLanguage: "नेपाली",
  },
  np: {
    contactNumber: "+९७७-०१-४२६२५४३, ४२६२८०२",
    email: "info@mohp.gov.np",
    toggleLanguage: "English",
  },
};

const nepaliDayNames = [
  "आइतबार",
  "सोमबार",
  "मंगलबार",
  "बुधबार",
  "बिहीबार",
  "शुक्रबार",
  "शनिबार",
];

const nepaliMonthNames = [
  "बैशाख",
  "जेष्ठ",
  "आषाढ",
  "श्रावण",
  "भाद्र",
  "आश्विन",
  "कार्तिक",
  "मंसिर",
  "पुष",
  "माघ",
  "फाल्गुण",
  "चैत्र",
];

const Navbar = ({ isNepali, toggleLanguage }) => {
  const [fontSize, setFontSize] = useState(15);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLowBandwidth, setIsLowBandwidth] = useState(false);
  const [data, setData] = useState({ phone: "", email: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/topbar/getall`
        );
        const firstEntry = response.data[0]; // Get the first entry
        setData({
          phone: convertPhoneNumber(firstEntry.phone, isNepali),
          email: firstEntry.email,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [isNepali]);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  const handleClick = (increment) => {
    const newSize = fontSize + increment;
    setFontSize(newSize);
  };

  const toggleBandwidth = () =>
    setIsLowBandwidth((prevBandwidth) => !prevBandwidth);

  const today = new Date();
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString(
    isNepali ? "ne-NP" : "en-US",
    dateOptions
  );
  const nepaliDate = formatNepaliDate(today);

  useEffect(() => {
    document.body.style.fontSize = `${isLowBandwidth ? 12 : fontSize}px`;
    document.body.style.backgroundColor = isDarkMode ? "#050505" : "#fff";
    document.body.style.color = isDarkMode ? "#faf7f7" : "#000";
  }, [fontSize, isDarkMode, isLowBandwidth]);

  const lang = isNepali ? translations.np : translations.en;

  return (
    <div className="border-b-2 border-graylight flex flex-col md:flex-row justify-between text-center mr-6 lg:ml-10 lg:mt-1">
      <div
        className={`flex flex-wrap items-center divide-x-2 divide-graylight mr-1 ${
          isDarkMode ? "text-yellow" : "text-blue"
        }`}
      >
        <div className="items-center hidden md:flex mb-1 lg:ml-2">
          <VscCalendar
            className={`text-lg ${isDarkMode ? "text-yellow" : "text-blue"}`}
          />
          <p className="mb-0 ml-2 px-2">
            {isNepali ? nepaliDate : formattedDate}
          </p>
        </div>
        <div className="items-center mb-2 mt-1 hidden md:flex px-3">
          <FaPhoneAlt
            className={`text-lg ${isDarkMode ? "text-yellow" : "text-blue"}`}
          />
          <p className="mb-0 ml-2">{data.phone}</p>
        </div>
        <div className="items-center hidden md:flex px-2">
          <MdOutlineEmail
            className={`text-lg ${isDarkMode ? "text-yellow" : "text-blue"}`}
          />
          <p className="mb-0 ml-2 cursor-pointer">{data.email}</p>
        </div>
      </div>
      <div
        className={`flex flex-wrap justify-center items-center w-full sm:w-auto ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <div className="flex items-center mb-2 mt-1 text-nowrap divide-x-2 divide-graylight">
          <p
            className="mb-0 sm:mr-6 lg:mr-4 cursor-pointer px-3"
            onClick={toggleBandwidth}
          >
            {isLowBandwidth ? "Low Bandwidth" : "Normal Bandwidth"}
          </p>
          <div className="divide-x-2 divide-graylight">
            <div className="px-3">
              {isDarkMode ? (
                <FaEye
                  className="text-xl cursor-pointer text-yellow"
                  onClick={toggleDarkMode}
                />
              ) : (
                <GoEyeClosed
                  className="text-xl cursor-pointer text-blue"
                  onClick={toggleDarkMode}
                />
              )}
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="btn btn-outline-secondary mr-2 px-3"
              onClick={() => handleClick(-1)}
            >
              A-
            </button>
          </div>
          <button
            className="btn btn-outline-secondary px-3"
            onClick={() => handleClick(1)}
          >
            A+
          </button>
          <p className="mb-0 cursor-pointer px-3" onClick={toggleLanguage}>
            {lang.toggleLanguage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const formatNepaliDate = (date) => {
  const nepaliDate = new NepaliDate(date);
  const day = nepaliDayNames[nepaliDate.getDay()];
  const month = nepaliMonthNames[nepaliDate.getMonth()];
  const nepaliDay = nepaliDate
    .getDate()
    .toString()
    .split("")
    .map((d) => String.fromCharCode(d.charCodeAt(0) + 0x0966 - 48))
    .join("");
  const nepaliYear = nepaliDate
    .getYear()
    .toString()
    .split("")
    .map((d) => String.fromCharCode(d.charCodeAt(0) + 0x0966 - 48))
    .join("");
  return `${day}, ${nepaliDay} ${month} ${nepaliYear}`;
};

const convertPhoneNumber = (phoneNumber, toNepali) => {
  if (toNepali) {
    // Convert English to Nepali
    return phoneNumber.replace(/\+/g, "+९७७-").replace(/-/g, "-");
  } else {
    // Convert Nepali to English
    return phoneNumber.replace(/\+९७७-/g, "+").replace(/-/g, "-");
  }
};

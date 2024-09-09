import React, { useState } from "react";
import DownloadLink from "./DownloadLink";
import PressRelease from "./PressRelease";
import RightInformation from "./RightInformation";

const translations = {
  en: {
    dir: "Directives",
    press: "Press Release/Decisions",
    notice: "Right to Information",
  },
  np: {
    dir: "निर्देशनहरू",
    press: "प्रेस विज्ञप्ति/निर्णय",
    notice: "सूचनाको हक",
  },
};

function InformationButton({ isNepali }) {
  const lang = isNepali ? translations.np : translations.en;
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="w-full max-w-auto  ">
      <div className="bg-blue text-white flex  justify-between">
        <button
          className={`flex-1  px-2 md:px-12 rounded-2xl py-2 m-1 md:m-2  ${
            activeButton === "Reports-Foreign Visit" ? "bg-red" : ""
          }`}
          onClick={() => handleClick("Reports-Foreign Visit")}
        >
          {lang.dir}
        </button>
        <button
          className={`flex-1 min-w-[120px] px-2 md:px-12 rounded-2xl py-2 m-1 md:m-2 ${
            activeButton === "Plans & Policies" ? "bg-red" : ""
          }`}
          onClick={() => handleClick("Plans & Policies")}
        >
          {lang.press}
        </button>
        <button
          className={`flex-1 min-w-[120px] px-2 md:px-12 rounded-2xl py-2 m-1 md:m-2 ${
            activeButton === "Transfer/Deputation" ? "bg-red" : ""
          }`}
          onClick={() => handleClick("Transfer/Deputation")}
        >
          {lang.notice}
        </button>
      </div>
      <div className="mt-4 max-h-96 overflow-y-auto">
        {activeButton === "Reports-Foreign Visit" && <DownloadLink />}
        {activeButton === "Plans & Policies" && <PressRelease />}
        {activeButton === "Transfer/Deputation" && <RightInformation />}
        {activeButton === null && <DownloadLink />}
      </div>
    </div>
  );
}

export default InformationButton;

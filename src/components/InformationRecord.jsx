import React from "react";
import DigitalMap from "../assets/digital-map.png";
import EAttendance from "../assets/attendance-icon.png";
import EMail from "../assets/email-icon.png";
import HospitalClinic from "../assets/hospital_clinic_covid_icon.png";
const translations = {
  en: {
    email: "E-mail",
  },
  np: {
    email: "ई-मेल",
  },
};

function InformationRecord({ isNepali, isDarkMode }) {
  const lang = isNepali ? translations.np : translations.en;
  return (
    <div className="bg-gray-dark lg:w-[400px]  h-[480px] py-6 text-white rounded-xl md:mr-2  ">
      <div className="flex px-3  py-3 m-2 shadow-sm hover:bg-blue rounded-xl border-b-2 border-yellow space-x-2 space-y-3 cursor-pointer">
        <img className="h-12 w-12  " src={DigitalMap} alt="" />
        <a href="" className="mt-1 font-bold ">
          Digital Mapping of Health INGOs in Nepal
        </a>
      </div>
      <div className="flex px-3  py-3 m-2 shadow-sm hover:bg-blue rounded-xl border-b-2 border-yellow space-x-2 cursor-pointer">
        <img className="h-12 w-12  " src={EAttendance} alt="" />
        <a href="" className="mt-1 font-bold py-2 px-3">
          E-Attendance
        </a>
      </div>
      <div className="flex px-3  py-3 m-2 shadow-sm hover:bg-blue rounded-xl border-b-2 border-yellow space-x-2 cursor-pointer">
        <img className="h-12 w-12 " src={EMail} alt="" />
        <a href="" className="mt-1 font-bold py-2 px-3">
          {lang.email}
        </a>
      </div>
      <div className="flex px-3  py-3 m-2 shadow-sm hover:bg-blue rounded-xl border-b-2 border-yellow space-x-2 cursor-pointer">
        <img className="h-12 w-12 " src={HospitalClinic} alt="" />
        <a href="" className="mt-1">
          OCMC,SSU,Geriatric Portal System
        </a>
      </div>
      <div className="flex px-3  py-3 m-2 shadow-sm hover:bg-blue rounded-xl border-b-2 border-yellow space-x-2 cursor-pointer">
        <img className="h-12 w-12 " src={HospitalClinic} alt="" />
        <a href="" className="mt-1">
          OCMC,SSU,Geriatric Portal System
        </a>
      </div>
    </div>
  );
}

export default InformationRecord;

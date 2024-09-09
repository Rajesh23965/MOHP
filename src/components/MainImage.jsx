import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const translations = {
  en: {
    minister: "Pradeep Yadav",
    pos1: "Hon'ble Minister for Health & Population",
    stminister: "Hasina Khan",
    pos2: "Hon'ble State Minister",
    dr: "Dr. Roshan Pokhrel",
    pos3: "Secretary",
    per: "Maddhu Sudan Burlakoti",
  },
  np: {
    minister: "प्रदीप यादव",
    pos1: "मा. मन्त्री",
    stminister: "हसीना खान",
    pos2: "मा. राज्यमन्त्री",
    dr: "डा. रोशन पोखरेल",
    pos3: "सचिव",
    per: "मधु सुदन बुर्लाकोटी",
  },
};

function MainImage({ isNepali }) {
  const [people, setPeople] = useState([]);
  const lang = isNepali ? translations.np : translations.en;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/officer/getall"
        );
        const officerData = response.data.data
          .filter((officer) => officer.status === "active")
          .map((officer, index) => ({
            id: index,
            name: officer.officerName,
            position: officer.officerPosition,
            email: officer.officerEmail,
            image: `http://localhost:4000/${officer.officerImage}`,
          }));
        setPeople(officerData);
      } catch (error) {
        console.error("Error fetching officer data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      {/* For small devices */}
      <div className="block md:hidden lg:hidden space-y-4 mt-3 sm:flex-2 mr-4 w-max-auto">
        {people.map((person) => (
          <div
            key={person.id}
            className="shadow-lg rounded-2xl w-full bg-red py-4 text-center hover:bg-blue"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <div className="flex flex-col space-y-2 mt-3">
              <span className="text-lg">{person.name}</span>
              <span className="text-sm text-red">{person.position}</span>
              {/* <span className="text-sm text-green">{person.email}</span> */}
            </div>
          </div>
        ))}
      </div>

      {/* For medium devices */}
      <div className="hidden md:flex md:flex-row md:w-56 -ml-2 md:justify-around md:space-x-4 md:mt-3 lg:hidden w-full">
        {people.map((person) => (
          <div
            key={person.id}
            className="flex-shrink-0 shadow-lg rounded-2xl w-full bg-red py-4 text-center hover:bg-blue"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <div className="flex flex-col space-y-2 mt-3">
              <span className="text-lg">{person.name}</span>
              <span className="text-sm text-black">{person.position}</span>
              {/* <span className="text-sm text-green">{person.email}</span> */}
            </div>
          </div>
        ))}
      </div>

      {/* For medium devices */}
      <div className="hidden ipadPro:flex ipadPro:flex-row md:w-60 ipadpro:justify-around ipadPro:space-x-4 ipadPro:mt-3 lg:hidden">
        {people.map((person) => (
          <div
            key={person.id}
            className="flex-shrink-0 shadow-lg rounded-2xl w-full bg-red py-4 text-center hover:bg-blue"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <div className="flex flex-col space-y-2 mt-3">
              <span className="text-lg">{person.name}</span>
              <span className="text-sm text-black">{person.position}</span>
              {/* <span className="text-sm text-green">{person.email}</span> */}
            </div>
          </div>
        ))}
      </div>

      {/* For large devices */}
      <div className="hidden lg:flex lg:flex-col lg:space-y-2 lg:mt-3">
        {people.map((person) => (
          <div
            key={person.id}
            className="flex shadow-sm rounded-2xl lg:h-[130px] bg-yellow mr-10 p-2 w-full"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4 flex flex-col space-y-2 mt-5">
              <span className="text-lg">{person.name}</span>
              <span className="text-sm text-red">{person.position}</span>
              {/* <span className="text-sm text-green">{person.email}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainImage;

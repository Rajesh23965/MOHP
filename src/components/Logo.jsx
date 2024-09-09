import React, { useState, useEffect } from "react";
import axios from "axios";
import MoHP from "../assets/logo.png";
import NepalFlag from "../assets/nepal_flag.gif";

import NationalAnthem from "../static/NationalAnthem.mp3";

import { Link } from "react-router-dom";

const translations = {
  en: {
    nation: "Government of Nepal",
    hp: "Ministry of Health and Population",
    address: "Ramshahpath, Kathmandu, Nepal",
  },
  np: {
    nation: "नेपाल सरकार",
    hp: "स्वास्थ्य तथा जनसङ्ख्या मन्त्रालय",
    address: "रामशाहपथ काठमाडौं नेपाल",
  },
};

const LogoPage = ({ isNepali, isDarkMode }) => {
  const lang = isNepali ? translations.np : translations.en;

  const [headerData, setHeaderData] = useState(null);
  const [audio] = useState(new Audio(NationalAnthem));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/header/headers"
        );
        setHeaderData(response.data[4]);
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };

    fetchHeaderData();

    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, [audio]);

  const playPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="px-4 md:px-10 mt-5 -ml-2 md:-ml-8 lg:ml-0">
      {/* For small and medium devices */}
      <div className="flex justify-between items-center md:hidden">
        <div className="w-auto">
          <Link to="/">
            <img
              className="h-14 w-16"
              src={
                headerData
                  ? `http://localhost:4000/${headerData.mainLogo}`
                  : MoHP
              }
              alt="Logo not found"
            />
          </Link>
        </div>
        <div className="text-center -ml-2 lg:ml-0">
          <span
            className={`${
              isDarkMode ? "text-red" : "text-blue"
            } font-bold text-sm`}
          >
            {headerData ? headerData.ministryName : lang.nation}
          </span>
          <br />
          <span
            className={`${
              isDarkMode ? "text-blue" : "text-red"
            } font-bold text-sm`}
          >
            {headerData ? headerData.officeName : lang.hp}
          </span>
          <br />
          <span className="text-sm">
            {headerData ? headerData.address : lang.address}
          </span>
        </div>
        <div>
          <img
            className="h-14 w-16"
            src={
              headerData
                ? `http://localhost:4000/${headerData.sideLogo}`
                : NepalFlag
            }
            alt="Flag not found"
            onClick={playPause}
          />
        </div>
      </div>{" "}
      <div className="hidden md:flex flex-wrap items-center justify-between ">
        <div className="w-auto">
          <Link to="/">
            <img
              className="h-19 w-28"
              src={
                headerData
                  ? `http://localhost:4000/${headerData.mainLogo}`
                  : MoHP
              }
              alt="Logo not found"
            />
          </Link>
        </div>
        <div className="text-center">
          <span
            className={`${
              isDarkMode ? "text-red" : "text-blue"
            } font-bold text-xl`}
          >
            {headerData ? headerData.ministryName : lang.nation}
          </span>
          <br />
          <span
            className={`${
              isDarkMode ? "text-blue" : "text-red"
            } font-bold text-2xl`}
          >
            {headerData ? headerData.officeName : lang.hp}
          </span>
          <br />
          <span className="text-sm">
            {headerData ? headerData.address : lang.address}
          </span>
        </div>
        <div className="flex">
          <img
            className="h-17 w-20"
            src={
              headerData
                ? `http://localhost:4000/${headerData.sideLogo}`
                : NepalFlag
            }
            alt="Flag not found"
            onClick={playPause}
          />
        </div>
      </div>
    </nav>
  );
};

export default LogoPage;

/* import React, { useState, useEffect } from "react";
import axios from "axios";
import MoHP from "../assets/logo.png";
import NepalFlag from "../assets/nepal_flag.gif";
import { Link } from "react-router-dom";
 */
/* const translations = {
  en: {
    nation: "Government of Nepal",
    hp: "Ministry of Health and Population",
    address: "Ramshahpath, Kathmandu, Nepal",
  },
  np: {
    nation: "नेपाल सरकार",
    hp: "स्वास्थ्य तथा जनसङ्ख्या मन्त्रालय",
    address: "रामशाहपथ काठमाडौं नेपाल",
  },
};

const LogoPage = ({ isNepali, isDarkMode }) => {
  const lang = isNepali ? translations.np : translations.en;

  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/header/headers"
        );
        setHeaderData(response.data.data);
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };

    fetchHeaderData();
  }, []);

const playPause = () => {
Your play/pause logic for the audio
};

const handleStatusToggle = async (id, currentStatus) => {
  if (currentStatus === "inactive") {
    alert("Cannot activate an inactive header directly.");
    return;
  }
  const newStatus = currentStatus === "active" ? "inactive" : "active";
  try {
    await axios.patch(`http://localhost:4000/api/header/headers/${id}`, {
      status: newStatus,
    });
    setHeaderData((prevHeaders) =>
      prevHeaders.map((header) =>
        header._id === id ? { ...header, status: newStatus } : header
      )
    );
  } catch (error) {
    console.error("There was an error updating the status!", error);
    alert("Failed to update status.");
  }
}; */

// const handleDelete = async (id) => {
//   const confirmDelete = window.confirm(
//     "Are you sure you want to delete this header?"
//   );
//   if (!confirmDelete) return;

//   try {
//     await axios.delete(`http://localhost:4000/api/header/headers/${id}`);
//     setHeaderData((prevHeaders) =>
//       prevHeaders.filter((header) => header._id !== id)
//     );
//     alert("Header deleted successfully");
//   } catch (error) {
//     console.error("There was an error deleting the header!", error);
//     alert("Failed to delete header.");
//   }
// };

// return (
//   <div className="container mx-auto p-4">
//     <nav className="px-4 md:px-10 mt-5 -ml-2 md:-ml-8 lg:ml-0">
{
  /* For small and medium devices */
}
//         <div className="flex justify-between items-center md:hidden">
//           <div className="w-auto">
//             <Link to="/">
//               <img
//                 className="h-14 w-16"
//                 src={
//                   headerData.length > 0
//                     ? `http://localhost:4000/${headerData[0].mainLogo}`
//                     : MoHP
//                 }
//                 alt="Logo not found"
//               />
//             </Link>
//           </div>
//           <div className="text-center -ml-2 lg:ml-0">
//             <span
//               className={`${
//                 isDarkMode ? "text-red" : "text-blue"
//               } font-bold text-sm`}
//             >
//               {headerData.length > 0 ? headerData[0].ministryName : lang.nation}
//             </span>
//             <br />
//             <span
//               className={`${
//                 isDarkMode ? "text-blue" : "text-red"
//               } font-bold text-sm`}
//             >
//               {headerData.length > 0 ? headerData[0].officeName : lang.hp}
//             </span>
//             <br />
//             <span className="text-sm">
//               {headerData.length > 0 ? headerData[0].address : lang.address}
//             </span>
//           </div>
//           <div>
//             <img
//               className="h-14 w-16"
//               src={
//                 headerData.length > 0
//                   ? `http://localhost:4000/${headerData[0].sideLogo}`
//                   : NepalFlag
//               }
//               alt="Flag not found"
//               onClick={playPause}
//             />
//           </div>
//         </div>{" "}
//         <div className="hidden md:flex flex-wrap items-center justify-between ">
//           <div className="w-auto">
//             <Link to="/">
//               <img
//                 className="h-19 w-28"
//                 src={
//                   headerData.length > 0
//                     ? `http://localhost:4000/${headerData[0].mainLogo}`
//                     : MoHP
//                 }
//                 alt="Logo not found"
//               />
//             </Link>
//           </div>
//           <div className="text-center">
//             <span
//               className={`${
//                 isDarkMode ? "text-red" : "text-blue"
//               } font-bold text-xl`}
//             >
//               {headerData.length > 0 ? headerData[0].ministryName : lang.nation}
//             </span>
//             <br />
//             <span
//               className={`${
//                 isDarkMode ? "text-blue" : "text-red"
//               } font-bold text-2xl`}
//             >
//               {headerData.length > 0 ? headerData[0].officeName : lang.hp}
//             </span>
//             <br />
//             <span className="text-sm">
//               {headerData.length > 0 ? headerData[0].address : lang.address}
//             </span>
//           </div>
//           <div className="flex">
//             <img
//               className="h-17 w-20"
//               src={
//                 headerData.length > 0
//                   ? `http://localhost:4000/${headerData[0].sideLogo}`
//                   : NepalFlag
//               }
//               alt="Flag not found"
//               onClick={playPause}
//             />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default LogoPage;

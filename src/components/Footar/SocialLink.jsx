import { useState, useEffect } from "react";

const translations = {
  en: {
    social: "Social Links",
  },
  np: {
    social: "सामाजिक सन्जालमा मन्त्रालय",
  },
};

const SocialLink = ({ isNepali, isDarkMode }) => {
  const [icons, setIcons] = useState([]);
  const iconColorClass = isDarkMode ? "text-yellow-500" : "text-blue-500";

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/icon/icons");
        const data = await response.json();
        setIcons(data);
      } catch (error) {
        console.error("Error fetching icons:", error);
      }
    };

    fetchIcons();
  }, []);

  const lang = isNepali ? translations.np : translations.en;

  return (
    <div className="text-[#4d4b4b] w-full lg:w-1/4 px-4">
      <h4 className="text-xl mt-10">{lang.social}</h4>
      <ul className="flex gap-6 mt-2 font-bold justify-center lg:justify-start">
        {icons.map((icon, index) => (
          <div key={index} className="flex">
            <a
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full  hover:bg-red"
            >
              <img
                src={`http://localhost:4000${icon.imageUrl}`}
                alt={icon.name}
                width={34}
                height={34}
                className={`w-34 h-34 ${iconColorClass} rounded-full hover:bg-red`}
              />
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;

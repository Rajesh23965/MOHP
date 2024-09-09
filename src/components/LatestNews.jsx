import React, { useState, useEffect } from "react";

const translations = {
  en: {
    news: "Latest:",
  },
  np: {
    news: "पछिल्लो:",
  },
};

const LatestNews = ({ isNepali, isDarkMode }) => {
  const lang = isNepali ? translations.np : translations.en;
  const [contentIndex, setContentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const contentList = [
    "निर्देशन सम्बन्धमा",
    "परिपत्र (सञ्चालन अनुमति सम्बन्धमा)",
    "गोष्ठीमा सहभागी हुने सम्बन्धमा",
    "स्वतः प्रकासन (२०८० माघ-चैत्र)",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isHovered) {
        handleNext();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [contentIndex, isHovered]);

  const handleNext = () => {
    setContentIndex((prevIndex) => (prevIndex + 1) % contentList.length);
  };

  return (
    <div className="flex justify-between mt-2 mr-4 lg:mr-10">
      <div>
        <span className="bg-red px-2 lg:px-4 py-1 lg:py-2 lg:ml-10 ml-4 text-white font-bold lg:w-32 h-8 lg:h-12 flex items-center justify-center text-base lg:text-xl">
          {lang.news}
        </span>
      </div>
      <div className="flex overflow-hidden bg-graylight w-full items-center">
        {contentList.map((content, index) => (
          <a
            href="#"
            key={index}
            className={`relative text-base lg:text-xl text-blue hover:text-red animate-slide w-full ${
              index === contentIndex ? "show" : "hide"
            } ${isHovered && index === hoveredIndex ? "paused" : ""}`}
            onMouseEnter={() => {
              setIsHovered(true);
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setHoveredIndex(null);
            }}
          >
            {content}
          </a>
        ))}
      </div>
      <style jsx>{`
        .animate-slide {
          animation: slide-in 2s ease-in forwards;
        }

        @keyframes slide-in {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-38%);
          }
        }

        .hide {
          display: none;
        }

        .show {
          display: block;
        }

        .paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LatestNews;

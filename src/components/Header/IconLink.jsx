import { useEffect, useState } from "react";

const LinkTag = ({ isDarkMode }) => {
  const [icons, setIcons] = useState([]);
  const iconColorClass = isDarkMode ? "text-yellow" : "text-blue";

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

  return (
    <nav className="border-b-2 border-graylight md:flex-row flex justify-end mr-6 ml-2 lg:ml-10">
      <div className="flex py-2 flex-wrap justify-evenly items-center w-full sm:w-auto lg:-mr-8">
        <a
          className="bg-pink py-1 text-red font-bold sm:inline text-sm rounded-2xl px-4 -ml-4"
          href="http://play.google.com/store/apps/details?id=com.rowsun.mrc"
        >
          Our App
        </a>
        <div className="text-lg sm:justify-center flex ml-10 mr-4 pr-4 gap-2">
          {icons.map((icon, index) => (
            <div key={index} className="flex">
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full "
              >
                <img
                  src={`http://localhost:4000${icon.imageUrl}`}
                  alt={icon.name}
                  width={20}
                  height={20}
                  className={`${iconColorClass} rounded-full`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default LinkTag;

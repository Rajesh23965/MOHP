import { useState, useEffect } from "react";
import { FiLink } from "react-icons/fi";
import axios from "axios";

const RightInformation = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/latestnews/files"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = async (filename) => {
    try {
      // Simulate download action or use window.open to download
      // For example, using axios to download
      const downloadUrl = `http://localhost:4000/api/download/${filename}`;
      const response = await axios.get(downloadUrl, {
        responseType: "blob",
      });

      // Create blob link to initiate download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div className="text-start overflow-y-auto">
      <ul>
        {newsItems.map((item) => (
          <li
            key={item._id}
            className="flex md:flex-nowrap justify-between border-b-2 border-white lg:mr-10 md:-mr-0 p-2 items-center"
          >
            <div className="flex items-center w-full md:w-auto">
              <div className="text-red mr-3 -mt-8">
                <FiLink />
              </div>
              <div className="md:hover:text-red cursor-pointer">
                <p>{item.title}</p>
                <div>
                  <p className="text-sm text-[#020202] py-2">
                    Published Date:{" "}
                    <span className="text-blue">
                      {new Date(item.publishedDate).toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="download-link mt-2 md:mt-0 w-full md:w-auto text-right md:text-left">
              {item.files.map((file) => (
                <a
                  key={file._id}
                  href={`http://localhost:4000/${file.filePath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue md:hover:text-red cursor-pointer"
                >
                  Download
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightInformation;

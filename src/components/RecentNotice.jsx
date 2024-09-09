import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiLink } from "react-icons/fi";

function RecentNotice() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/latestnews/files"
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-h-screen overflow-y-auto">
      <div className="text-start h-80">
        <ul>
          {news.map((item) => (
            <li key={item._id} className="border border-gray p-6">
              <div className="flex">
                <div className="text-red mr-3 py-1">
                  <FiLink />
                </div>
                <div className="md:hover:text-red cursor-pointer">
                  {/* <p>{item.title}</p> */}
                  <div className="download link">
                    {item.files.map((file) => (
                      <a
                        key={file.filePath}
                        href={`http://localhost:4000/${file.filePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {/* {file.filename} */}
                        {item.title}
                      </a>
                    ))}
                  </div>
                  <div>
                    <div>
                      <p className="text-sm text-[#020202] py-2">
                        Published Date:
                        <span className="text-blue">
                          {new Date(item.publishedDate).toLocaleString()}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecentNotice;

import React, { useState } from "react";
import Nepal from "../assets/Nepal.png";

function SmartHealthInitiatives() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="ml-10 mr-10 mt-7 ">
      <h1 className="text-center py-10 underline text-blue-600 text-3xl font-bold">
        Smart Health Initiatives
      </h1>
      <div className="">
        <div className="mb-10 flex px-3 ">
          <a
            href="#"
            className="border-2 flex hover:text-blue-500 w-[25%] "
            onClick={toggleVisibility}
          >
            <div className="px-4 py-6 ">
              <div className="img">
                <img src={Nepal} alt="" className="" />
              </div>
              <div
                className={`text mt-4 text-justify bg-gray-100 ${
                  isVisible ? "block" : "hidden"
                }`}
              >
                <p className="flex flex-start">
                  With Health Facility Registry, users of health services will
                  be able to identify locations of nearest health institutions,
                  public and private, service available at the institutions and
                  names of health professionals.
                </p>
              </div>
            </div>
          </a>
          {/* Add more icons and content here */}
        </div>
      </div>
    </div>
  );
}

export default SmartHealthInitiatives;

// slide one by one by clicking on the icon

/* import React, { useRef, useState, useEffect } from "react";

function HealthVideoLink() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  const videos = [
    {
      url: "https://mohp.gov.np/uploads/Video/165787369806010000000_832487437249827_7424133117716969800_n.mp4",
      title: "Video 1",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873725231Navi%20Malam.mp4",
      title: "Video 2",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873724849Merobarsa%20Commitments.mp4",
      title: "Video 3",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873730525World%20No%20Tobacco%20Day.mp4-VE",
      title: "Video 4",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873723619Golden%20Days.mp4",
      title: "Video 5",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873722380Exercise.mp4",
      title: "Video 6",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873722380Exercise.mp4",
      title: "Video 7",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="p-4">
      <h1 className="text-center py-4 underline text-blue-600 text-3xl font-bold">
        Health Videos
      </h1>
      <div className="flex justify-center">
        <div className="w-full max-w-5xl overflow-hidden relative">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {videos.map((video, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 p-2">
                <div className="bg-black p-2 rounded-md">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.url}
                    controls
                    className="w-full h-full"
                  ></video>
                  <div className="text-white text-center mt-2">
                    {video.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-4">
            {Array.from(
              { length: Math.ceil(videos.length / 4) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full ${
                    currentIndex === index ? "bg-blue-500" : "bg-gray-500"
                  }`}
                ></button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HealthVideoLink;
 */

// display 4 item in the frame when user click second icon display hidden video
/* import React, { useRef, useState, useEffect } from "react";

function HealthVideoLink() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  const videos = [
    {
      url: "https://mohp.gov.np/uploads/Video/165787369806010000000_832487437249827_7424133117716969800_n.mp4",
      title: "Video 1",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873725231Navi%20Malam.mp4",
      title: "Video 2",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873724849Merobarsa%20Commitments.mp4",
      title: "Video 3",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873730525World%20No%20Tobacco%20Day.mp4-VE",
      title: "Video 4",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873723619Golden%20Days.mp4",
      title: "Video 5",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873722380Exercise.mp4",
      title: "Video 6",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873722380Exercise.mp4",
      title: "Video 7",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="p-4">
      <h1 className="text-center py-4 underline text-blue-600 text-3xl font-bold">
        Health Videos
      </h1>
      <div className="flex justify-center">
        <div className="w-full max-w-5xl overflow-hidden relative">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {videos.map((video, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 p-2">
                <div className="bg-black p-2 rounded-md">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.url}
                    controls
                    className="w-full h-full"
                  ></video>
                  <div className="text-white text-center mt-2">
                    {video.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-4">
            {Array.from(
              { length: Math.ceil(videos.length / 4) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full ${
                    currentIndex === index ? "bg-blue-500" : "bg-gray-500"
                  }`}
                ></button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HealthVideoLink;
 */

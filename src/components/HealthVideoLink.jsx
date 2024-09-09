import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const translations = {
  en: {
    video: "Health Videos",
  },
  np: {
    video: "स्वास्थ्य भिडियो",
  },
};

function HealthVideoLink({ isNepali, isDarkMode }) {
  const lang = isNepali ? translations.np : translations.en;
  const videoRefs = useRef([]); // Refs to control individual videos

  const videos = [
    {
      url: "https://mohp.gov.np/uploads/Video/165787369806010000000_832487437249827_7424133117716969800_n.mp4",
      title: "10000042323534353465342324354575video",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873725231Navi%20Malam.mp4",
      title: "Navi Malam",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873723619Golden%20Days.mp4",
      title: "Golden Days",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873722380Exercise.mp4",
      title: "exercise",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873722380Exercise.mp4",
      title: "1003i1931903uvideocb2ouc2obc2",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873722380Exercise.mp4",
      title: "1003i1931903uvideocb2ouc2obc2",
    },
    {
      url: "https://mohp.gov.np/uploads/Video/1657873722380Exercise.mp4",
      title: "1003i1931903uvideocb2ouc2obc2",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 744,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 485,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="relative  p-4 mt-6 ml-4 mr-4">
      <h1 className="underline  underline-offset-12  decoration-red py-5 border-gray text-center text-blue text-3xl font-bold">
        {lang.video}
      </h1>

      <div className="mt-3   ">
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className=" ">
              <div className=" bg-[#020202] p-2">
                <video src={video.url} controls className="w-full h-40"></video>
              </div>
              <div className=" p-2 rounded-md">
                <p className=" font-semibold"></p> {video.title}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default HealthVideoLink;

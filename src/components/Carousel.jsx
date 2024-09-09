import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/crousal");
        const files = response.data;
        if (files.length > 0) {
          const firstFileEntry = files[0];
          const imageUrls = firstFileEntry.files
            .filter(
              (file) => file.fileType.startsWith("image/") && !file.deleted
            )
            .map((file) => `http://localhost:4000/${file.filePath}`);

          setImages(imageUrls);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        toast.error("Error fetching images");
      }
    };

    fetchFiles();
  }, []);

  const settings = {
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-[600px] sm:w-full mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              className="h-[360px] object-cover w-[620px]"
              src={image}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

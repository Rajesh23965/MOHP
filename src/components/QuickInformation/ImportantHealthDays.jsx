import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const translations = {
  en: {
    title: "Important Health Days",
    daytf: "31 May",
    dayfd: "01 December",
    daysa: "07 April",
    daytfa: "25 April",
    t1: "World No Tobacco Day",
    t2: "World AIDS Day",
    t3: "World Health Day",
    t4: "World Malaria Day",
  },
  np: {
    title: "महत्वपूर्ण स्वास्थ्य दिनहरू",
    daytf: "३१ मे",
    dayfd: "०१ डिसेम्बर",
    daysa: "०७ अप्रिल",
    daytfa: "२५ अप्रिल",
    t1: "विश्व धुम्रपान रहित दिवस",
    t2: "विश्व एड्स दिवस",
    t3: "विश्व स्वास्थ्य दिवस",
    t4: "विश्व औलो दिवस",
  },
};
function ImportantHealthDays({ isNepali, isDarkMode }) {
  const lang = isNepali ? translations.np : translations.en;
  const slides = [
    { day: lang.daytf, title: lang.t1 },
    { day: lang.dayfd, title: lang.t2 },
    { day: lang.daysa, title: lang.t3 },
    { day: lang.daytfa, title: lang.t4 },
  ];
  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 744,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 485,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="  bg-graylight lg:ml-10  lg:mr-10 px-3 py-5 mt-10 md:ml-4 md:mr-4 ml-5 mr-5 ">
      <h1 className="underline  underline-offset-12 decoration-red py-2  border-gray text-center text-blue text-3xl w-full font-bold ">
        {lang.title}
      </h1>
      <div className="mt-5">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="">
              <div className=" bg-white rounded-3xl   cursor-pointer  py-8  text-red  hover:bg-blue  text-center mb-5 ">
                <span className=" lg:text-3xl sm:2xl flex-wrap font-bold">
                  {slide.day}
                </span>
                <h4 className="mt-2 text-green text-xl ">{slide.title}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ImportantHealthDays;

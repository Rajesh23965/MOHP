import Nepal from "../assets/Nepal.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const translations = {
  en: {
    title: " Smart Health Initiatives",
    t1: "With Health Facility Registry, users of health services will be able to identify locations of nearest health institutions, public and private, service available at the institutions and names of health professionals.",
    t2: "RDQA is used for improving the quality of data collection from health facility information systems and monitoring/evaluation of health information management systems, defining indicators, data management and statistics",
    t3: "Health Dashboard can be primarily used for monitoring the progress of the indicators with the aid of graphical charts, maps and statistics are also readily available to be downloaded.",
    t4: "Health Dashboard can be primarily used for monitoring the progress of the indicators with the aid of graphical charts, maps and statistics are also readily available to be downloaded.",
    t5: "This knowledge Management portal aims to strengthen the accessibility and visibility of health and health related information resources from the Ministry of Health and Population.",
  },
  np: {
    title: "स्मार्ट हेल्थ प्रविधि",
    t1: "स्वास्थ्य सुविधा रजिस्ट्री मार्फत, स्वास्थ्य सेवाका प्रयोगकर्ताहरूले नजिकका स्वास्थ्य संस्थाहरू, सार्वजनिक र निजी, संस्थाहरूमा उपलब्ध सेवाहरू र स्वास्थ्यकर्मीहरूको नाम पहिचान गर्न सक्षम हुनेछन्।",
    t2: "RDQA स्वास्थ्य सुविधा सूचना प्रणालीहरूबाट डाटा सङ्कलनको गुणस्तर सुधार गर्न र स्वास्थ्य सूचना व्यवस्थापन प्रणालीहरूको अनुगमन/मूल्याङ्कन, सूचकहरू परिभाषित गर्ने, डाटा व्यवस्थापन र तथ्याङ्कहरू बनाउन प्रयोग गरिन्छ।",
    t3: "स्वास्थ्य ड्यासबोर्ड मुख्यतया ग्राफिकल चार्ट, नक्सा र तथ्याङ्कहरू डाउनलोड गर्नको लागि सजिलै उपलब्ध छन् को सहायताले सूचकहरूको प्रगति अनुगमन गर्न प्रयोग गर्न सकिन्छ।",
    t4: "स्वास्थ्य ड्यासबोर्ड मुख्यतया ग्राफिकल चार्ट, नक्सा र तथ्याङ्कहरू डाउनलोड गर्नको लागि सजिलै उपलब्ध छन् को सहायताले सूचकहरूको प्रगति अनुगमन गर्न प्रयोग गर्न सकिन्छ।",
    t5: "यो ज्ञान व्यवस्थापन पोर्टलले स्वास्थ्य तथा जनसङ्ख्या मन्त्रालयबाट स्वास्थ्य र स्वास्थ्यसम्बन्धी सूचना स्रोतहरूको पहुँच र दृश्यतालाई सुदृढ पार्ने लक्ष्य राखेको छ।",
  },
};

function SmartHealthInitiatives({ isNepali }) {
  const lang = isNepali ? translations.np : translations.en;
  const Data = [
    { text: lang.t1, img: Nepal },
    { text: lang.t2, img: Nepal },
    { text: lang.t3, img: Nepal },
    { text: lang.t4, img: Nepal },
    { text: lang.t5, img: Nepal },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 744, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 485, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="py-5 mt-10 p-4 mx-4">
      <h1 className="underline underline-offset-12 decoration-red py-5 border-gray text-center text-blue text-3xl font-bold">
        {lang.title}
      </h1>

      <div className="mt-3">
        <Slider {...settings}>
          {Data.map((data, index) => (
            <div
              key={index}
              className="bg-graylight h-[420px] border-2 border-gray text-lightblack cursor-pointer"
            >
              <div className="round-t-xl">
                <img src={data.img} alt="" className="w-full" />
              </div>
              <div className="p-4 text-justify hover:text-blue">
                <p className="font-semibold">{data.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SmartHealthInitiatives;

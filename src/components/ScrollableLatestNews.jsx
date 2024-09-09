import RecentNotice from "./RecentNotice.jsx";
import MinisterDetails from "./MinisterDetails.jsx";
import Carousel from "./Carousel.jsx";
import InformationButton from "./InformationButton.jsx";
import InformationRecord from "./InformationRecord.jsx";
import ButtonInformation from "./Buttoninformation.jsx";

const translations = {
  en: {
    not: "Notices",
  },
  np: {
    not: "सूचनाहरू",
  },
};

const ScrollableLatestNews = ({
  isNepali,
  isDarkMode,
  toggleDarkMode,
  toggleLanguage,
}) => {
  const lang = isNepali ? translations.np : translations.en;
  const commonProps = {
    isNepali,
    isDarkMode,
    toggleDarkMode,
    toggleLanguage,
  };

  return (
    <main className="flex flex-col lg:flex-row mt-5 w-auto ml-10 ">
      {/* Small Devices */}
      <section className="block md:hidden space-y-5">
        <div className="w-full">
          <Carousel />
        </div>
        <div className="text-start w-full -ml-3 ">
          <div>
            <span className="bg-red text-white w-full inline-block py-2 text-center font-bold text-xl">
              {lang.not}
            </span>
          </div>
          <div className="mt-3 w-full">
            <RecentNotice {...commonProps} />
          </div>
        </div>
        <div className="flex justify-start bg-graylight rounded-none w-full mt-9 -ml-3">
          <InformationButton {...commonProps} />
        </div>
        <aside className="w-full">
          <div className="text-start">
            <MinisterDetails {...commonProps} />
          </div>
          <div className=" w-full mt-10 -ml-3">
            <InformationRecord {...commonProps} />
          </div>
        </aside>
      </section>

      {/* Medium Devices */}
      <section className="hidden md:block lg:hidden">
        <div className="flex md:flex-row md:space-x-3">
          <div className="text-start w-full -ml-6">
            <div>
              <span className="bg-red text-white w-full inline-block py-1 text-center font-bold text-xl">
                {lang.not}
              </span>
            </div>
            <div className="mt-3 w-full">
              <RecentNotice {...commonProps} />
            </div>
          </div>
          <div className="w-full md:w-[55%]">
            <Carousel />
          </div>
        </div>
        <div className="flex mt-9 bg-gray rounded-none w-full  w-max-auto md:-ml-5">
          <InformationButton {...commonProps} />
        </div>
        <aside>
          <div className="text-start flex-wrap w-max-auto ">
            <MinisterDetails {...commonProps} />
          </div>
          <div className="w-full mt-6">
            <InformationRecord {...commonProps} />
          </div>
        </aside>
      </section>

      {/* Large Devices */}
      <section className="hidden lg:block">
        <div className="flex w-full justify-between">
          <div className="text-start  ">
            <div>
              <span className="bg-red text-white w-full inline-block py-1 text-center font-bold text-xl">
                {lang.not}
              </span>
            </div>
            <div className="mt-3 w-full">
              <RecentNotice {...commonProps} />
            </div>
          </div>
          <div className="flex-grow px-4">
            <Carousel />
          </div>
          <div className="text-start  w-max-auto">
            <MinisterDetails {...commonProps} />
          </div>
        </div>
        <div className="w-full mt-9">
          <ButtonInformation {...commonProps} />
        </div>
      </section>
    </main>
  );
};

export default ScrollableLatestNews;

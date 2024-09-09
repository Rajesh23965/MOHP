import PradeepYadav from "../assets/pradeep.png";
import HasinaKhan from "../assets/Hasina.png";

const translations = {
  en: {
    minister: "Pradeep Yadav",
    pos1: "Hon'ble Minister for Health & Population",
    stminister: "Hasina Khan",
    pos2: "Hon'ble State Minister",
  },
  np: {
    minister: "प्रदीप यादव",
    pos1: "मा. मन्त्री",
    stminister: "हसीना खान",
    pos2: "मा. राज्यमन्त्री",
  },
};

const img = [PradeepYadav, HasinaKhan];

function DetailsofPerson({ isNepali }) {
  const lang = isNepali ? translations.np : translations.en;

  const people = [
    {
      id: 0,
      name: lang.minister,
      position: lang.pos1,
      image: img[0],
    },
    {
      id: 1,
      name: lang.stminister,
      position: lang.pos2,
      image: img[1],
    },
  ];

  return (
    <div>
      {/* For small and medium devices */}
      <div className="sm:flex md:flex overflow-x-auto gap-4 mr-4 -ml-4  lg:hidden justify-around  space-y-3">
        {people.map((person) => (
          <div
            key={person.id}
            className="flex-shrink-0 shadow-lg rounded-2xl w-full bg-red  py-4 text-center hover:bg-blue"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <div className="flex flex-col space-y-2 mt-3">
              <span className="text-lg">{person.name}</span>
              <span className="text-sm text-red">{person.position}</span>
            </div>
          </div>
        ))}
      </div>

      {/* For large devices */}
      <div className="hidden lg:flex lg:flex-col items-center justify-around space-y-4">
        {people.map((person) => (
          <div
            key={person.id}
            className="shadow-sm rounded-2xl w-72 h-44 bg-yellow p-4 flex flex-col items-center mr-8"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <div className="text-center">
              <span className="text-lg block">{person.name}</span>
              <span className="text-sm text-red block">{person.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsofPerson;

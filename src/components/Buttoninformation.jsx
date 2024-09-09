import InformationButton from "./InformationButton";
import InformationRecord from "./InformationRecord";
const Buttoninformation = () => {
  return (
    <aside className="flex justify-between mt-9 ">
      <div className="flex justify-start bg-graylight rounded-none w-full   mr-4">
        <InformationButton />
      </div>
      <div className=" mr-10  ">
        <InformationRecord />
      </div>
    </aside>
  );
};

export default Buttoninformation;

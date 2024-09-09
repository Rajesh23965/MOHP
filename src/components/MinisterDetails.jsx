import MainImage from "./MainImage";
import DetailsofPerson from "./DetailsofPerson";

function Item({ isImage }) {
  if (isImage) {
    return <MainImage />;
  } else {
    return <DetailsofPerson />;
  }
}

const MinisterDetails = () => {
  return (
    <section>
      <ul>
        <Item isImage={true} />
      </ul>
    </section>
  );
};

export default MinisterDetails;

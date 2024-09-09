import { useState, useEffect } from "react";

const ProgramAPI = ({ api }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${api}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [api]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl border-2 border-red ml-20 mr-20">{data.id}</h1>

      <h1 className="text-blue border-2 border-gray text-lg ml-20 mr-20">
        {data.title}
      </h1>
      <h1 className="text-green border-2 border-red text-lg">{data.url}</h1>
      <img src={data.thumbnailUrl} alt="image not found" />
    </div>
  );
};

export default ProgramAPI;

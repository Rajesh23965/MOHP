import { useState, useEffect } from "react";

const APIHealthInstruction = ({ api }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  todos;
  useEffect(() => {
    fetch(`https://dummyapi.online/api/${api}`)
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
    <div className="">
      <h1 className="text-yellow text-2xl border-2 border-[#020202]">
        {data.id}
      </h1>
      <h2 className="text-red text-2xl border-2 border-green">{data.movie}</h2>
      <h2 className="text-green text-2xl border-2 border-blue">
        {data.rating}
      </h2>
      <video className="text-yellow text-2xl border-2 ml-80 border-[#020202]">
        {data.imdb_url}
      </video>
    </div>
  );
};

export default APIHealthInstruction;

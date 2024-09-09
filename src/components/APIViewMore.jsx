import { useState, useEffect } from "react";

const APIViewMore = ({ viewmore }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  todos;
  useEffect(() => {
    fetch(`https://dummyapi.online/api/${viewmore}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [viewmore]);

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
      <h2 className="text-red text-2xl border-2 border-green">{data.name}</h2>
      <h2 className="text-green text-2xl border-2 border-blue">
        {data.username}
      </h2>
      <h3 className="text-pink">{data.email}</h3>
      {/* <h2 className="text-graylight">{data.address}</h2> */}
    </div>
  );
};

export default APIViewMore;

import { useEffect, useState } from "react";

const AboutUsPage = ({ endpoint }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [endpoint]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <h1 className="bg-green border-2 text-3xl border-[#020202]">{data.id}</h1>

      <h1 className="text-yellow bg-blue text-2xl border-gray">{data.title}</h1>
      <p className="border-2 border-green">{data.body}</p>
    </div>
  );
};

export default AboutUsPage;

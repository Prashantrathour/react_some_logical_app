import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImSpinner } from "react-icons/im";

function InfiniteLoading() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState(1);
  useEffect(() => {
    async function fetchdata(page) {
      setLoading(true);
      try {
        let res = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`
        );
        setdata([...data, ...res.data]);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        alert(error.message)
      }
    }
    fetchdata(page);

    document.addEventListener("scroll", () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.offsetHeight
      )
        setpage((pre) => pre + 1);
    });
  }, [page]);
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-start">
        <ImSpinner className="animate-spin text-4xl block" />
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        {data?.map((item) => {
          return (
            <div key={item.id+Math.random()} className="p-2 border shadow-lg shadow-orange-300 flex flex-col justify-center">
              <p>{item.id}</p>
              <h1>{item.title}</h1>
              <div className="w- flex justify-center" ><img className="w-full" src={item.url} alt="image" /></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InfiniteLoading;

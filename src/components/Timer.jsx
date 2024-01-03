import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
function Timer() {
  let [sec, setsec] = useState(0);
  let [min, setmin] = useState(0);
  let [hr, sethr] = useState(0);
  let [start, setstart] = useState(false);

  function handlestart() {
    setstart(true);
  }
  function handlereset() {
    setsec(0);
    setmin(0);
    sethr(0);
    setstart(false);
    
  }
  function handlestop() {
    setstart(false)
  }
  useEffect(() => {
    var key = setInterval(() => {
        if (sec >= 60) {
          setmin((prev) => prev + 1);
          setsec(0)
        }
        if (min >= 60) {
          setmin(0)
          sethr((prev) => prev + 1);
          setsec(0)
        }
      setsec((prev) => prev + 1);
    }, 1000);
    if(!start){
        clearInterval(key)
    }
    return function clear() {
      clearInterval(key);
    };
  }, [sec,min,hr,start]);
  
  return (
    <div className="w-full  h-screen items-center bg-pink-300 overflow-y-hidden">
        <nav className="flex justify-end p-4 text-2xl font-bold from-teal-500 to-red-500">
        <Link to={"/"}><ImHome /></Link>
        </nav>

    <div className="w-full flex justify-center  h-full items-cente items-center">
      <div className=" w-80 h-80  p-4 container shadow-2xl  shadow-current flex flex-col justify-between rounded-xl bg-pink-700">
        <div className="flex justify-between flex-col items-center  h-1/2">
        <p className="text-3xl  text-fuchsia-300">Stopwatch</p>
          <h1 className="text-white w-1/2 text-center font-extrabold text-lg p-2 px-9 bg-green-900 shadow-md shadow-yellow-400 rounded-3xl">{hr + ":" + min + ":" + sec}</h1>
        </div>
        <div className="flex justify-between p-4 ">
          <button
          
            className={`p-2 px-5 bg-orange-500 text-white text-sm font-bold rounded-full ${!start?"cursor-not-allowed bg-orange-400":""}`}
            onClick={handlestop}
            disabled={!start}
          >
            stop
          </button>
          <button
            className="p-2 px-5 bg-orange-500 text-white text-sm font-bold rounded-full"
            onClick={handlestart}
          >
            start
          </button>
          <button
          name="reset"
             className={`p-2 px-5 bg-orange-500 text-white text-sm font-bold rounded-full ${start?"cursor-not-allowed bg-orange-400":""}`}
            onClick={handlereset}
          >
            reset
          </button>
          
        </div>
      </div>
    </div>

    </div>
  );
}

export default Timer;

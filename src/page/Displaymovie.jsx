import React, { useEffect, useState } from "react";
import { useDebounce } from "../customhooks/Debounce";
import axios from "axios";
import { ImHome, ImSearch, ImSpinner11 } from "react-icons/im";
import { Link } from "react-router-dom";

function Displaymovie() {
  const [input, setinput] = useState("");
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(false);
  const [closesearch, setclosesearch] = useState(false);
  async function fetchMoview(search) {
    const apiKey = "b3d7513e669169551c86a221bb67c912";
    try {
      setloading(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
      );
      setmovies(res.data.results);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  }
  const debounce = useDebounce(input);
  useEffect(() => {
    if (debounce) {
        setclosesearch(false)
      fetchMoview(debounce);
    }
  }, [debounce, input]);
  console.log(movies)
  return (
    <div className="p-2 flex flex-col justify-center items-center" >
         <nav className="flex justify-end p-4 text-2xl font-bold from-teal-500 to-red-500">
        <Link to={"/"}><ImHome /></Link>
        </nav>
      <h1 className="font-bold text-3xl font-serif w-full">Search movies</h1>
      <div className="flex justify-center flex-col w-full ">
        <div className=" py-2 flex max-w-80 rounded-3xl shadow-lime-500 shadow-inner m-auto gap-4 items-center text-center  justify-center p-1 px-3 relative">
          <input
            type="text"
            className="p-1 px-3 outline-none py-1 active:bg-white"
            name="search"
            placeholder="search movie..."
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <span>
            <ImSearch />
          </span>
        </div>
        <div className={`w-fit rounded-xl m-auto mt-2 shadow-2xl shadow-pink-600 flex justify-center absolute top-2 right-1/2 translate-x-1/2 translate-y-20 bg-white z-40 ${!input||movies?.length==0||closesearch?"hidden":""}`}>
          
            {!loading ? <ol className="p-2  text-black max-h-72 overflow-y-auto object-cover no-scrollbar">
              {movies?.map((movie) => (
                <li onClick={()=>setinput(movie.original_title)} className="p-1 text-xs min-w-52 hover:bg-slate-200 cursor-pointer">{movie.original_title}</li>
              ))}
            </ol> : 
            "Searching..."
          }
          
        </div>
      </div>
    {!loading?  <div onClick={()=>setclosesearch(true)} className="mt-4 w-full grid m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-2">
        {movies?.map((movie)=>
            <div key={movie.id} className="shadow-lg shadow-orange-400 rounded-lg w-full mt-2">
                <div className="w-[80%] flex m-auto justify-center items-center">

            <img
            className="object-cover w-full h-full m-auto "
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            
            />
                </div>
            <div className="flex flex-col justify-between items-center p-2 gap-2 ">
            <h4 className="text-left  w-full text-sm text-gray-900">{movie.original_title}</h4>
            <h4 className="text-left  w-full text-sm text-gray-500">{movie.release_date}</h4>
            <h4 className="text-left  w-full text-sm text-gray-500 overflow-hidden">{movie.overview}</h4>
            <h4 className="text-left  w-full text-sm text-gray-700">Language: {movie.original_language}</h4>

            </div>
          </div>
        )}
        
      </div>:<div className="w-full flex justify-center items-center h-1/2 mt-10"><ImSpinner11 className="animate-spin"/></div>}
    </div>
  );
}

export default Displaymovie;

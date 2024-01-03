import React from "react";

function Home() {
  return (
    
        <div className="p-0 m-0 bg-[rgb(13,13,13)] flex flex-row justify-between gap-4 text-white w-full h-full z-0">
          <div className="mt-10 lg:mt-56 flex flex-row w-full lg:w-full gap-4 justify-between">
    
            <div className="w-full p-2 gap-4 flex flex-col" id="first">
              <img
                className="w-[82px] h-[49px] ml-[10%] lg:ml-[100px]"
                src="https://sgp1.digitaloceanspaces.com/svgfile/2021/07/Sunflower-Illustration-Black-White-Svg-FW210605HL91-800x800.png"
                alt=""
              />
              <img
                className="w-[190px] h-[116px] lg:ml-[-50px] rounded-3xl"
                src="https://framerusercontent.com/images/71Lkazp81ZpTwq5E8mgETaQgA8.jpg"
                alt=""
              />
              <img
                className="w-[207px] h-[212px] rounded-3xl"
                src="https://framerusercontent.com/images/zD5YOAhzOzuOk015DU7X7qNNGI.jpg?scale-down-to=512"
                alt=""
              />
            </div>
    
            <div
              id="second"
              className="p-3 flex flex-col gap-4 items-center justify-center w-full"
            >
              <h1 className="text-4xl lg:text-6xl text-center font-bold">
                Idea to MVP in 2 weeks
              </h1>
    
              <p className="text-gray-600 w-full lg:w-80">
                Accelerate your success with our 14-day MVP creation. Expertise
                meets efficiency at PLG Pioneers.
              </p>
              <div className="flex items-center gap-4 w-full border rounded-full justify-between p-1.5 px-3">
                <input
                  className="rounded-xl focus:outline-none outline-none bg-[rgb(13,13,13)] w-full lg:w-auto"
                  type="text"
                  placeholder="name@email.com"
                />
                <button className="px-4 text-black bg-yellow-400 rounded-full flex-shrink-0 p-2">
                  Get notified
                </button>
              </div>
              <div className="w-full flex justify-center items-center">
                <img
                  className="w-[250px] h-[173px] rounded-3xl"
                  src="https://framerusercontent.com/images/lRrPICMkVKTOrJaQQBoCo6ZxxA.jpg?scale-down-to=512"
                  alt=""
                />
              </div>
            </div>
    
            <div
              id="third"
              className="p-3 w-full justify-end flex flex-col items-end gap-4 "
            >
              <img
                className="w-[82px] h-[49px] mr-[10%] lg:mr-[100px]"
                src="https://sgp1.digitaloceanspaces.com/svgfile/2021/07/Sunflower-Illustration-Black-White-Svg-FW210605HL91-800x800.png"
                alt=""
              />
              <div className="w-full flex justify-end items-end flex-col overflow-hidden">
                <img
                  className="w-[219px] h-[222px] mr-[-10%] lg:mr-[-80px]"
                  src="https://framerusercontent.com/images/Br0m8k72i6obkxvmy0bdrdCw50Y.jpg"
                  alt=""
                />
                <img
                  className="w-[222px] h-[240px] rounded-3xl"
                  src="https://framerusercontent.com/images/9TKZna4TfSaouPHKZ1nNGn5s4.jpg?scale-down-to=512"
                  alt=""
                />
              </div>
            </div>
    
          </div>
        </div>
  );
}

export default Home;

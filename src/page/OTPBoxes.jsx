import React, { useEffect, useRef, useState } from "react";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";
import "./otp.module.css"
function OTPBoxes() {
  let arr = new Array(4).fill("");
  const [otp, setotp] = useState(arr);
  const inputref = useRef([]);
  function handlechange(e, index) {
    const value=e.target.value
 if(isNaN(value)){
  return alert('Invalid number')
 }
    if(arr.length-1>index&&value){
        let newotp=[...otp]
        newotp[index]=value.substring(value.length-1)
        setotp(newotp)
        inputref.current[index+1].focus()

    }else if(arr.length-1==index&&value<=4){
        
        let newotp=[...otp]
        newotp[index]=value.substring(value.length-1)
        setotp(newotp)
      }
      
    }
    function handleback(e,index){
      if(e.key=="Backspace"&&index>0){
        let newotp=[...otp]
        newotp[index]=""
        setotp(newotp)
        inputref.current[index-1].focus()
      }else if(e.key=="Backspace"&&index==0){
        let newotp=[...otp]
        newotp[index]=""
        setotp(newotp)

    }
  }
  window.document.addEventListener("paste",(e)=>{
    let value=e.clipboardData.getData("text").substring(0,4)
    if(isNaN(value)){
      return alert('Invalid number')
     }
    console.log(value)
    setotp(["","","",""])

    setotp([...value])
    inputref.current[value.length-1].focus()
  })
  console.log(otp.join(""))
  useEffect(() => {
    inputref.current[0].focus()
     
  }, []);
  return (
    <div>
      <nav className="flex justify-end p-4 text-2xl font-bold from-teal-500 to-red-500">
        <Link to={"/"}>
          <ImHome />
        </Link>
      </nav>
      <h2 className="text-center text-teal-700 text-2xl font-semibold">
        Enter your otp
      </h2>
      <div className="w-full flex justify-center">
        <div className="flex border space-x-5">
          {otp.map((value, index) => (
            <span className="border border-black size-10" key={index}>
              <input
                value={value}
                
                onChange={(e)=>handlechange(e,index)}
                ref={(input) => (inputref.current[index] = input)}
                className="w-full  outline-green-600 p-0 h-full text-center border"
                type="text"
              onKeyDown={(e)=>handleback(e,index)}
                
                name=""
                id=""
              />
            </span>
          ))}
        </div>
      </div>
        {otp.join("")?<h1 className="flex w-full justify-center text-center  m-auto animate-pulse "><h4 className="otp text-amber-700">Entred Otp:{otp.join("")}</h4></h1>:""}
    </div>
  );
}

export default OTPBoxes;

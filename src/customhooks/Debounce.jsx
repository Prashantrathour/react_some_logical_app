import { useEffect, useState } from "react"

export const useDebounce=(input,delay=1000)=>{
  const [debouce,setdebounce]=useState(input)
    
  useEffect(()=>{
    const id=setTimeout(() => {
        setdebounce(input)
    }, delay);
    return ()=>clearTimeout(id)
  },[input,delay])
 return debouce;
}